import { mq } from './media-queries';

export type ResponsiveProp<P extends keyof React.CSSProperties> = React.CSSProperties[P] | Array<React.CSSProperties[P]>;

export function resolveResponsive(
  property: keyof React.CSSProperties,
  param: React.CSSProperties[typeof property] | Array<React.CSSProperties[typeof property]>,
) {
  if (!Array.isArray(param)) return { [property]: param };

  return {
    [property]: param[1],
    [mq.mobile]: {
      [property]: param[0],
    },
  };
}
