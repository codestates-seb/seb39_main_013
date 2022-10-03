/* eslint-disable no-unused-vars */
import React from "react";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { loginFn } from "../api";
import { setUser } from "../redux/reducer/userSlice";

export default function useLoginMutation(value) {
  const dispatch = useDispatch();

  const { mutate, isError, isLoading, isSuccess } = useMutation(
    () => loginFn(value),
    {
      retry: false,
      onSuccess: (res) =>
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
        ),
    }
  );

  return { mutate, isError, isLoading, isSuccess };
}
