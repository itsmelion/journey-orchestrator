'use client';
import { forwardRef } from 'react';

import { StackStyled } from './flex';
import { ResponsiveProp } from '../utilities';

export interface StackProps extends React.PropsWithChildren {
  direction?: ResponsiveProp<'flexDirection'>;
  justify?: ResponsiveProp<'justifyContent'>;
  align?: ResponsiveProp<'alignItems'>;
  gap?: ResponsiveProp<'gap'>;
  display?: ResponsiveProp<'display'>;
  flex?: ResponsiveProp<'flex'>;
  wrap?: ResponsiveProp<'flexWrap'>;
}

export const Stack = forwardRef<HTMLDivElement, StackProps>((props, ref) => {
  return (
    <StackStyled ref={ ref } { ...props } />
  );
});

Stack.displayName = 'Stack';
