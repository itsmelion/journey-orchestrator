'use client';
import styled from '@emotion/styled';
import Image from 'next/image';
import { FieldErrors, useFormContext } from 'react-hook-form';

import { Message, Stack } from '@journey-orchestrator/components';
import { Expedition, Pilot } from '@journey-orchestrator/services';

import { IconWrapper, ExpField } from '../common.styled';

export const PilotCard = ({ idx }: { idx: number }) => {
  const { register, formState } = useFormContext<Expedition>();
  const isInvalid = !!(formState.errors?.members?.[idx] as FieldErrors<Pilot>)?.experience?.message;

  return (
    <Stack>
      <CardWrapper isInvalid={isInvalid}>
        <Stack gap={'2rem'}>
          <Stack direction={'row'} align={'center'} gap={'1rem'}>
            <IconWrapper>
              <Image
                src={'/pilot.svg'}
                alt='pilot icon'
                fill
              />
            </IconWrapper>
            <h3>Pilot</h3>
          </Stack>

          <Stack>
            <p>Experience</p>
            <ExpField
              type='number'
              step={1}
              min={0}
              {...register(`members.${idx}.experience`, { valueAsNumber: true })}
            />
          </Stack>
        </Stack>
      </CardWrapper>
      <Message name={`members.${idx}.experience`} errors={formState.errors} />
    </Stack>
  )
}

type CardProps = { isInvalid: boolean };
const CardWrapper = styled.div<CardProps>(({ isInvalid }) => ({
  backgroundColor: isInvalid ? '#cf2b2b' : '#436550',
  color: 'white',
  borderRadius: '2rem',
  padding: '1rem',
}));
