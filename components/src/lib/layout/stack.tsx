import React, { forwardRef } from 'react';

import { StackStyled } from './flex';

type ResponsiveProp<P extends keyof React.CSSProperties> = React.CSSProperties[P] | Array<React.CSSProperties[P]>;

export interface StackProps extends React.PropsWithChildren {
  direction?: ResponsiveProp<'flexDirection'>;
  justify?: ResponsiveProp<'justifyContent'>;
  align?: ResponsiveProp<'alignItems'>;
  gap?: ResponsiveProp<'gap'>;
  display?: ResponsiveProp<'display'>;
}

export const Stack = forwardRef<HTMLDivElement, StackProps>((props, ref) => {
  return (
    <StackStyled ref={ ref } { ...props } />
  );
});

Stack.displayName = 'Stack';
