'use client';
import styled from '@emotion/styled';

export const BaseButton = styled.button<React.ButtonHTMLAttributes<HTMLButtonElement>>({
  appearance: 'none',
  backgroundColor: 'transparent',
  border: '1pt solid transparent',
  borderRadius: '0.25em',
  fontSize: '1rem',
  display: 'inline-flex',
  flex: '0 0 auto',
  cursor: 'pointer',
  color: 'currentColor',
});
