import { useMutation, useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { nanoid } from 'nanoid';
import type { Expedition } from './expedition.types';
import { expeditionMock } from '.';

export function useExpeditions() {
  return useSuspenseQuery<Array<Expedition>>({
    queryKey: ['expeditions'],
    queryFn: async ({ signal }) => {
      const cancelableAPICall = fetch('/api/missions', {
        signal,
      }).then(r => r.json());

      return cancelableAPICall;
    },
    initialData: expeditionMock,
  });
}

export function useAddExpedition() {
  const cache = useQueryClient();

  return useMutation<void, Error, Expedition>({
    mutationFn: async (expeditionData) => {
      const id = nanoid();
      expeditionData.id = id;
      // @ts-expect-error comes as dayjs date
      expeditionData.departure = expeditionData.departure.format();

      cache.setQueryData<Array<Expedition>>(['expeditions'], old => [...old ?? [], expeditionData]);
      cache.setQueryData(['expeditions', id], expeditionData);
    },
  });
}
