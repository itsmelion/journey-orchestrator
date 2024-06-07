import React from 'react';

type LabelProps = React.PropsWithChildren & {
  label?: string;
  name: string;
};

export function Label({ children, label, name, ...props }: LabelProps) {
  if (!label || !children) return null;

  return <label { ...props } htmlFor={ name }>{label || children}</label>;
}
