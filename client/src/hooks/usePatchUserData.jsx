import { useMutation } from "react-query";
import { patchUserInfo } from "../api";

export default function usePatchUserData(body, id) {
  const { mutate, isLoading } = useMutation(() => patchUserInfo(body, id), {
    retry: false,
  });

  return { mutate, isLoading };
}
