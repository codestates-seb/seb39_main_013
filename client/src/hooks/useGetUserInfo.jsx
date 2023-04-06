import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { getUserData } from "../api";
import { setUser } from "../redux/reducer/userSlice";

export default function useGetUserInfo(id) {
  const dispatch = useDispatch();
  const { refetch, isLoading } = useQuery(
    ["getUserData", id],
    () => getUserData(id),
    {
      enabled: false,
      retry: 1,
      onSuccess: (res) => {
        dispatch(
          setUser({
            id: res.data.data.memberId,
            name: res.data.data.name,
            email: res.data.data.email,
            phone: res.data.data.phone,
            address: res.data.data.homeAddress,
            postcode: res.data.data.zipcode,
            profileImg: res.data.data.profileImage,
            isLogin: true,
          })
        );
      },
    }
  );
  return { refetch, isLoading };
}
