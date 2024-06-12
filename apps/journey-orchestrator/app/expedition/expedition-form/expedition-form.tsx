'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider, useFieldArray } from 'react-hook-form';

import { Button, Field, Message, Stack } from '@journey-orchestrator/components';
import { MemberTypes, Expedition, dayjs, Jobs, useAddExpedition } from '@journey-orchestrator/services';

import { schema } from './form-schema';
import { PilotCard } from './components/PilotCard/PilotCard';
import { EngineerCard } from './components/EngineerCard/EngineerCard';
import { PassengerCard } from './components/PassengerCard/PassengerCard';
import { useRouter } from 'next/navigation';

export const ExpeditionForm = () => {
  const { mutate } = useAddExpedition();
  const router = useRouter();
  const form = useForm<Expedition>({
    resolver: zodResolver(schema),
    defaultValues: { members: [{
      type: MemberTypes.pilot,
      experience: 10,
    }]}
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "members",
  });

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(d => {
        mutate(d);
        router.back();
      })}>
        <Stack gap={'1rem'}>
        <Field
          label='Expedition name'
          placeholder='Expedition 69'
          {...form.register('name')}
        />

        <Field
          label='Destination'
          placeholder='Mars - Hangar 18'
          {...form.register('destination')}
        />

        <Field
          label='Departure'
          type='date'
          min={dayjs.utc().format('YYYY-MM-DD')}
          max={dayjs.utc('2025-01-01', 'YYYY-MM-DD').format('YYYY-MM-DD')}
          {...form.register('departure')}
        />

        <h3>Members</h3>

        <Stack gap={'1rem'} direction={'row'} wrap={'wrap'}>
          {fields.map((field, idx) => (
            <div key={field.id}>
              {field.type === MemberTypes.pilot && <PilotCard idx={idx} />}
              {field.type === MemberTypes.passenger && <PassengerCard removeFn={remove} idx={idx} />}
              {field.type === MemberTypes.engineer && <EngineerCard removeFn={remove} idx={idx} />}
            </div>
          ))}
        </Stack>

        <Message name='members.root' errors={form.formState.errors} />


        <Stack direction={'row'} gap={'1rem'}>
        <Button
          type='button'
          onClick={() => append({
            type: MemberTypes.passenger,
            wealth: 0,
            age: 0,
          })}>
          Add passenger
        </Button>

        <Button
          type='button'
          onClick={() => append({
            type: MemberTypes.engineer,
            experience: 0,
            job: Jobs.mechanics,
          })}>
          Add engineer
        </Button>
        </Stack>

        <Button type='submit'>
          Create Expedition
        </Button>
        </Stack>
      </form>
    </FormProvider>
  );
}
