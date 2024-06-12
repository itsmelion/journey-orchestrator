'use client';
import styled from '@emotion/styled';
import { Input } from '@journey-orchestrator/components';

export const IconWrapper = styled.div(({
  width: '5rem',
  height: '5rem',
  overflow: 'hidden',
  borderRadius: '100%',
  position: 'relative',
}));


export const ExpField = styled(Input)(({
  color: 'white',
  width: '5rem',
  height: '2rem',
  lineHeight: 1,
  fontSize: '1rem',
  fontWeight: 'bold',

  borderRadius: '2rem'
}));
