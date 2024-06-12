'use client';
import styled from '@emotion/styled';
import Image from 'next/image';
import { FieldErrors, useFormContext, useWatch } from 'react-hook-form';

import { Button, Message, Stack } from '@journey-orchestrator/components';
import { Engineer, Expedition, Jobs } from '@journey-orchestrator/services';

import { IconWrapper, ExpField } from '../common.styled';
import { useEffect } from 'react';
import { hasSameJob } from '../../form-schema';

interface MemberProps {
  idx: number;
  removeFn: (idx: number) => void;
}

export const EngineerCard = ({ idx, removeFn }: MemberProps) => {
  const { register, formState, setError, clearErrors } = useFormContext<Expedition>();
  const fieldErrorObj = (formState.errors?.members?.[idx] as FieldErrors<Engineer>);
  const isInvalid = !!fieldErrorObj?.experience?.message || !!fieldErrorObj?.job?.message;
  const members = useWatch({ name: 'members' });

  useEffect(() => {
    if (hasSameJob(members)) {
      setError(
        `members.${idx}.job`,
        { message: 'Cannot have engineers doing same job' }
      );
    } else {
      clearErrors(`members.${idx}.job`);
    }
  }, [members]);

  return (
    <Stack>
      <CardWrapper isInvalid={isInvalid}>
        <Stack gap={'2rem'}>
          <Stack direction={'row'} align={'center'} gap={'1rem'}>
            <IconWrapper>
              <Image
                src={'/engineer.svg'}
                alt='passenger icon'
                fill
              />
            </IconWrapper>
            <h3>Engineer</h3>
          </Stack>

          <Stack direction={'row'} gap={'1rem'}>
            <Stack>
              <label htmlFor={`members.${idx}.experience`}>Experience</label>
              <ExpField
                type='number'
                step={1}
                min={0}
                {...register(`members.${idx}.experience`, {
                  valueAsNumber: true,
                  min: 0,
                })}
              />
            </Stack>

            <Stack>
              <label htmlFor={`members.${idx}.job`}>Job</label>
              <Select {...register(`members.${idx}.job`)}>
                {Object.entries(Jobs).map(([key, label]) => (
                  <option key={key} value={key}>{label}</option>
                ))}
              </Select>
            </Stack>
          </Stack>
        </Stack>

        <Button type='button' onClick={() => removeFn(idx)}>remove</Button>
      </CardWrapper>
      <Message name={`members.${idx}.experience`} errors={formState.errors} />
      <Message name={`members.${idx}.job`} errors={formState.errors} />
    </Stack>
  )
}

type CardProps = { isInvalid: boolean };
const CardWrapper = styled.div<CardProps>(({ isInvalid }) => ({
  backgroundColor: isInvalid ? '#cf2b2b' : '#3c6a7b',
  color: 'white',
  borderRadius: '2rem',
  padding: '1rem',
}));


const Select = styled.select(({
  'backgroundColor': 'rgba(0,0,0,0.1)',
  'border': '1.5pt solid rgba(0,0,0,0.1)',
  'borderRadius': '2em',
  'color': 'currentColor',
  'padding': '0em 1em',
  height: '2rem',
  lineHeight: 1,
  fontSize: '1rem',
  fontWeight: 'bold',

  'option': {
    backgroundColor: '#212330'
  }
}));
