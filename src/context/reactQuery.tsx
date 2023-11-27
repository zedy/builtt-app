/* eslint-disable import/no-extraneous-dependencies */
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

interface Props {
  children: JSX.Element;
}
export const queryClient = new QueryClient();

function ReactQueryProvider({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {import.meta.env.VITE_ENV === 'dev' && <ReactQueryDevtools />}
    </QueryClientProvider>
  );
}

export default ReactQueryProvider;
