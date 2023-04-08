import Cookies from "js-cookie";
import { useQuery } from "react-query";
import { axiosInstance } from "../api/axiosInstance";

const getFavoriteItem = async () => {
  const token = Cookies.get("authorization");
  const res = await axiosInstance.get("/api/v1/bookmarks", {
    headers: {
      Authorization: token,
    },
  });

  return res.data.data;
};

export default function useGetFavoriteItem(userInfo) {
  const { data, isLoading, refetch, isSuccess } = useQuery(
    ["getFavoriteData"],
    getFavoriteItem,
    {
      retry: 2,
      enabled: !!userInfo.isLogin,
    }
  );

  return { data, isLoading, refetch, isSuccess };
}
