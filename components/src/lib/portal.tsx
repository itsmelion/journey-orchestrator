import React from 'react';
import { createPortal } from 'react-dom';

type PortalProps = React.PropsWithChildren<{
  target?: HTMLElement;
}>;

export function Portal(props: PortalProps) {
  const { children } = props;
  const isBrowser = typeof window !== 'undefined';
  const target = props.target || isBrowser ? document.body : null;

  if (!isBrowser) return children;
  if (!target) throw new Error('Must provide a target DOM element to instance a portal');

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return createPortal(<>{children}</>, target);
}
