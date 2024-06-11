'use client';

import { useForm, FormProvider, useFieldArray } from 'react-hook-form';
import { Button, Field } from '@journey-orchestrator/components';
import { MemberTypes, Expedition, dayjs } from '@journey-orchestrator/services';

import { zodResolver } from '@hookform/resolvers/zod';

import { schema } from './form-schema';

export const ExpeditionForm = () => {
  const form = useForm<Expedition>({
    resolver: zodResolver(schema),
  });
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    control: form.control,
    name: "members",
  });

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit((d) => console.log(d))}>
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

        {fields.map((field) => (
          <p key={field.id}>hey {field.id}</p>
        ))}

        <Button
          onClick={() => append({
            type: MemberTypes.pilot,
            experience: 10
          })}>
          add member
        </Button>

        <Button type='submit'>
          Create Expedition
        </Button>
      </form>
    </FormProvider>
  );
}
