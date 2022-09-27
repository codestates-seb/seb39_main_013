import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { authorizeToken } from "../api";

/**
 *
 * @returns 에러 시 redux purge
 */

export default function useAuthorize() {
  const { refetch } = useQuery(["auth"], authorizeToken, {
    retry: 1,
    enabled: false,
    onSuccess: (data) => {
      console.log("success");
      console.log(data);
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.message);
    },
  });

  return { refetch };
}
