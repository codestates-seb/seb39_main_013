import { MutationCache, QueryCache, QueryClient } from "react-query";

export const errorHandler = (err) => {
  console.log(err);
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
  queryCache: new QueryCache({
    onError: errorHandler,
  }),
  mutationCache: new MutationCache({
    onError: errorHandler,
  }),
});
