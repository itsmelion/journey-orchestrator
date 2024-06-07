'use client';

import { useForm, FormProvider } from 'react-hook-form';
import { Button, Field } from '@journey-orchestrator/components';
import { Expedition } from '@journey-orchestrator/services';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  name: z.string().min(1, { message: 'Mission needs thrilling name' }),
  destination: z.string().min(1, { message: 'Must define here are you landing' }),
  departure: z.date().min(new Date(), { message: "Can't time travel back time yet, date must be in the future" })
});

export const ExpeditionForm = () => {
  const form = useForm<Expedition>({
    resolver: zodResolver(schema),
  });


  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(() => {})}>
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
          min={'2024-06-07'}
          {...form.register('departure')}
        />

        <Button type='submit'>
          Create Expedition
        </Button>
      </form>
    </FormProvider>
  );
}
