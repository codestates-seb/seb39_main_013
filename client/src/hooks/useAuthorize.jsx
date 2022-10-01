import { useQuery } from "react-query";
import { authorizeToken } from "../api";

/**
 *
 * @returns 에러 시 redux purge
 */

export default function useAuthorize() {
  const { refetch } = useQuery(["auth"], authorizeToken, {
    retry: false,
    enabled: false,
    cacheTime: 0,
    onSuccess: (data) => {
      console.log("success");
      console.log(data);
    },
  });

  return { refetch };
}
