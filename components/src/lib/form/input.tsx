import { BaseInput } from './form.styled';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = (props: InputProps) => {
  return <BaseInput { ...props } />;
};
