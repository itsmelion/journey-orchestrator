'use client';
import styled from '@emotion/styled';
import { BaseButton } from '../common.styled';

export const IconButton = styled(BaseButton)({
  'borderRadius': '100%',
  'padding': '0.5em',
  'fontSize': '1.25em',
  'lineHeight': 1,
  ':hover': {
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
});
