import { useQuery } from "react-query";
import { oauthLoginFn } from "../api";
import { toast } from "react-toastify";

export default function useOauthMutaion() {
  const { refetch, isError, isLoading } = useQuery(["oauth"], oauthLoginFn, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: false,
    retry: 1,
    onSuccess: (data) => {
      console.log("query success :", data);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { refetch, isError, isLoading };
}
