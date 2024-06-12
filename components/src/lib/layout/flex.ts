'use client';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import isPropValid from '@emotion/is-prop-valid';

import { StackProps } from './stack';
import { resolveResponsive } from '../utilities';

const forbiddenProps = [
  'direction',
  'align',
  'justify',
  'gap',
  'wrap',
];

function shouldAllow(prop: string) {
  return !forbiddenProps.includes(prop) || isPropValid(prop);
}

export const Flex = styled.span({
  display: 'flex',
  flex: 1,
});

export const Main = styled.main({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
});

export const StackStyled = styled(Flex, { shouldForwardProp: shouldAllow })<StackProps>(({
  direction = 'column',
  align = 'flex-start',
  justify = 'stretch',
  gap = 0,
  display = 'flex',
  flex = 1,
  wrap = 'nowrap',
}) => css({
  ...resolveResponsive('display', display),
  ...resolveResponsive('flex', flex),
  ...resolveResponsive('gap', gap),
  ...resolveResponsive('flexDirection', direction),
  ...resolveResponsive('alignItems', align),
  ...resolveResponsive('justifyContent', justify),
  ...resolveResponsive('flexWrap', wrap),
})).withComponent('div');
