import Cookies from "js-cookie";
import { useMutation } from "react-query";
import { axiosInstance } from "../api/axiosInstance";
import { queryClient } from "../utils/queryClient";

const addFavoriteItem = async (id) => {
  const token = Cookies.get("authorization");
  const res = await axiosInstance.post("/api/v1/bookmarks", id, {
    headers: {
      Authorization: token,
    },
  });
  return res;
};

export default function useAddFavoriteItem(id) {
  const { mutate, isLoading } = useMutation(() => addFavoriteItem(id), {
    retry: false,
    onSuccess: () => {
      return queryClient.refetchQueries(["getFavoriteData"]);
    },
  });

  return { mutate, isLoading };
}
