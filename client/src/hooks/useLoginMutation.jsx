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

  const { mutate, isError, isLoading, isSuccess } = useMutation(
    () => loginFn(value),
    {
      retry: false,
      onSuccess: (data) => console.log(data),
    }
  );

  return { mutate, isError, isLoading, isSuccess };
}
