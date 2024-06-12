'use client';
import { forwardRef } from 'react';

import { BaseInput } from './form.styled';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function InputComponent(props, ref) {

  return (
    <BaseInput
      { ...props }
      id={props.id || props.name}
      ref={ ref }
    />
  );
});
