'use client';
import { useFormState, type UseFormRegisterReturn } from 'react-hook-form';
import { forwardRef } from 'react';

import { Input } from './input';
import { Message } from './message';
import { Label } from './label';

type InputAttributes = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
type FieldProps = InputAttributes & React.PropsWithRef<{ label?: string }> & Omit<UseFormRegisterReturn, 'ref'> ;

export const Field = forwardRef<HTMLInputElement, FieldProps>(function Field(props, ref) {
  const { label, name, ...inputProps } = props;
  const { errors } = useFormState({ name: props.name });
  const isInvalid = errors?.[name]?.message;

  return (
    <fieldset>
      <Label name={ name } label={ label } />

      <Input
        ref={ ref }
        className={ isInvalid ? 'invalid' : '' }
        name={ name }
        { ...inputProps }
      />
      <Message name={ name } errors={errors} />
    </fieldset>
  );
});
