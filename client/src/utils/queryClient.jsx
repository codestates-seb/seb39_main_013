import { AxiosError } from "axios";
import Cookies from "js-cookie";
import { MutationCache, QueryCache, QueryClient } from "react-query";
import { toast } from "react-toastify";
import { persistor } from "../redux/store";

export const errorHandler = async (error) => {
  console.log("inner Axios error :", error);
  if (error.response.status === 410) {
    Cookies.remove("authorization");
    await persistor.purge();
    return;
  }
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

    if (error.config.data === undefined) {
      console.log("inner error");
      toast.error("error!");
      return;
    }
  }

  toast.error("error!");
  return;
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
