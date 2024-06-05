import { Flex, Stack } from '../layout';

interface HeaderProps {
  title: string;
}

export const Header = (props: React.PropsWithChildren<HeaderProps>) => {
  const { children, title } = props;

  return (
    <Stack direction="row">
      <h1>{title}</h1>

      <Flex />

      {children}
    </Stack>
  );
};
