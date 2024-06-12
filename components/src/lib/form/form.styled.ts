'use client';
import styled from '@emotion/styled';

export const BaseInput = styled.input({
  'backgroundColor': 'rgba(0,0,0,0.1)',
  'border': '1.5pt solid rgba(0,0,0,0.1)',
  'borderRadius': '0.375em',
  'color': 'currentColor',
  'padding': '0.4em 1em',
  'width': '100%',

  '&.invalid': {
    borderColor: '#FF2C27',
  },
});

export const ErrorMessageParagraph = styled.p({
  textAlign: 'left',
  fontSize: '0.75rem',
  color: '#FF2C27',
  marginTop: '0.3rem',
});
