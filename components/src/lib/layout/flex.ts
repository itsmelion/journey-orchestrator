'use client';
import { CSSProperties } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import isPropValid from '@emotion/is-prop-valid';

import { StackProps } from './stack';
import { mq } from '../utilities';

const forbiddenProps = [
  'direction',
  'align',
  'justify',
  'gap',
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
}) => ({
  display: 'flex',
  flex: 1,
  ...css({
    ...resolveResponsive('display', display),
    ...resolveResponsive('gap', gap),
    ...resolveResponsive('flexDirection', direction),
    ...resolveResponsive('alignItems', align),
    ...resolveResponsive('justifyContent', justify),
  }),
})).withComponent('div');

function resolveResponsive(
  property: keyof CSSProperties,
  param: CSSProperties[typeof property] | Array<CSSProperties[typeof property]>,
) {
  if (!Array.isArray(param)) return { [property]: param };

  return {
    [property]: param[1],
    [mq.mobile]: {
      [property]: param[0],
    },
  };
}
