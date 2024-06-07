'use client';
import styled from '@emotion/styled';
import { forwardRef } from 'react';

const ModalBackdrop = styled.div({
  position: 'fixed',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0,0,0,0.2)',
  backdropFilter: 'blur(5px)',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const ModalContent = styled.main({
  borderRadius: '1rem',
  backgroundColor: '#394a5a',
  padding: '1rem',
  color: '#FFFFFFFA',
});

export const Modal = forwardRef<HTMLDivElement, React.PropsWithChildren>(({ children }, ref) => {
  return (
    <ModalBackdrop ref={ ref }>
      <ModalContent>
        {children}
      </ModalContent>
    </ModalBackdrop>
  );
});

Modal.displayName = 'Modal';
