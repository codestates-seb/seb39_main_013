import { AxiosError } from "axios";
import { MutationCache, QueryCache, QueryClient } from "react-query";
import { toast } from "react-toastify";

export const errorHandler = (error) => {
  if (error instanceof AxiosError) {
    if (!error.response?.data) {
      toast.error(error.message);
      return;
    }

    if (error.response?.data.error) {
      toast.error(error.response?.data.error);
      return;
    }

    if (error.response?.data.message) {
      toast.error(error.response?.data.message);
      return;
    }
  }

  toast.error("error!");
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      onError: errorHandler,
    },
  },
  queryCache: new QueryCache({
    onError: errorHandler,
  }),
  mutationCache: new MutationCache({
    onError: errorHandler,
  }),
});
