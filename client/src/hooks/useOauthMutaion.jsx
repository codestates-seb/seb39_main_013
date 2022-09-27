import { useQuery } from "react-query";
import { oauthLoginFn } from "../api";

export default function useOauthMutaion() {
  const { refetch, isError, isLoading } = useQuery(["oauth"], oauthLoginFn, {
    enabled: false,
    retry: false,
    onSuccess: (data) => {
      console.log("query success :", data);
    },
  });

  return { refetch, isError, isLoading };
}
