'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';
import { ErrorBoundary } from 'react-error-boundary';
import expeditionsMock from './expedition.mock';

function makeQueryClient() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });

  client.setQueryData(['expeditions'], expeditionsMock);

  return client;
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
  if (typeof window === 'undefined') {
    // Server: always make a new query client
    return makeQueryClient();
  }
  else {
    // Browser: make a new query client if we don't already have one
    // This is very important, so we don't re-make a new client if React
    // suspends during the initial render. This may not be needed if we
    // have a suspense boundary BELOW the creation of the query client
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}

export const ServicesProvider = ({ children }: React.PropsWithChildren) => {
  const queryClient = getQueryClient();

  return (
    <ErrorBoundary fallback={ <div>Error</div> }>
      <QueryClientProvider client={ queryClient }>
        <ReactQueryStreamedHydration>
          {children}
        </ReactQueryStreamedHydration>
        <ReactQueryDevtools initialIsOpen={ false } />
      </QueryClientProvider>
    </ErrorBoundary>
  );
};
