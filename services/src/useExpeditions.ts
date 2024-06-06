import { useSuspenseQuery } from '@tanstack/react-query';
import type { Expedition } from './expedition.types';

export function useExpeditions() {
  return useSuspenseQuery<Expedition[]>({
    queryKey: ['expeditions'],
    queryFn: ({ signal }) => {
      return fetch('/api/missions', {
        signal,
      }).then(r => r.json());
    },
  });
}
