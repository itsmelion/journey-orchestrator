'use client';
import styled from '@emotion/styled';
import Image from 'next/image';
import { FieldErrors, useFormContext } from 'react-hook-form';

import { Button, Message, Stack } from '@journey-orchestrator/components';
import { Expedition, Passenger } from '@journey-orchestrator/services';

import { IconWrapper, ExpField } from '../common.styled';

interface MemberProps {
  idx: number;
  removeFn: (idx: number) => void;
}

export const PassengerCard = ({ idx, removeFn }: MemberProps) => {
  const { register, formState } = useFormContext<Expedition>();
  const fieldErrorObj = (formState.errors?.members?.[idx] as FieldErrors<Passenger>);
  const isInvalid = !!fieldErrorObj?.age?.message || !!fieldErrorObj?.wealth?.message;

  return (
    <Stack>
      <CardWrapper isInvalid={isInvalid}>
        <Stack gap={'2rem'}>
          <Stack direction={'row'} align={'center'} gap={'1rem'}>
            <IconWrapper>
              <Image
                src={'/member.svg'}
                alt='passenger icon'
                fill
              />
            </IconWrapper>
            <h3>Passenger</h3>
          </Stack>

          <Stack direction={'row'} gap={'1rem'}>
            <Stack>
              <p>Age</p>
              <ExpField
                type='number'
                step={1}
                min={0}
                max={120}
                {...register(`members.${idx}.age`, { valueAsNumber: true })}
              />
            </Stack>

            <Stack>
              <p>Wealth</p>
              <ExpField
                type='number'
                step={1}
                min={0}
                {...register(`members.${idx}.wealth`, { valueAsNumber: true })}
              />
            </Stack>
          </Stack>
        </Stack>

        <Button type='button' onClick={() => removeFn(idx)}>remove</Button>
      </CardWrapper>
      <Message name={`members.${idx}.age`} errors={formState.errors} />
      <Message name={`members.${idx}.wealth`} errors={formState.errors} />
    </Stack>
  )
}

type CardProps = { isInvalid: boolean };
const CardWrapper = styled.div<CardProps>(({ isInvalid }) => ({
  backgroundColor: isInvalid ? '#cf2b2b' : '#a89d1c',
  color: 'white',
  borderRadius: '2rem',
  padding: '1rem',
}));
