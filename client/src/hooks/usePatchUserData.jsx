import { useMutation } from "react-query";
import { patchUserInfo } from "../api";
import { queryClient } from "../utils/queryClient";

export default function usePatchUserData(body, id) {
  const { mutate, isLoading } = useMutation(() => patchUserInfo(body, id), {
    retry: false,
    onSuccess: () => queryClient.refetchQueries(["getUserData", id]),
  });

  return { mutate, isLoading };
}
