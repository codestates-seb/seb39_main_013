/* eslint-disable no-unused-vars */
import React from "react";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { loginFn } from "../api";
import { setUser } from "../redux/reducer/userSlice";

/**
 * login data redux 설정하기
 */
export default function useLoginMutation(value) {
  const dispatch = useDispatch();
  console.log(dispatch);

  const { mutate, isError, isLoading, isSuccess } = useMutation(
    () => loginFn(value),
    {
      retry: false,
      onSuccess: async (res) =>
        dispatch(
          setUser({
            name: res.data.data.name,
            email: res.data.data.email,
            isLogin: true,
          })
        ),
    }
  );

  return { mutate, isError, isLoading, isSuccess };
}
