/* eslint-disable no-unused-vars */
import React from "react";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { loginFn } from "../api";
import { setUser } from "../redux/reducer/userSlice";
import { toast } from "react-toastify";

/**
 * login data redux 설정하기
 */
export default function useLoginMutation(value) {
  const dispatch = useDispatch();

  const { mutate, isError, isLoading, isSuccess } = useMutation(
    () => loginFn(value),
    {
      retry: 1,
      onSuccess: (data) => console.log(data),
      onError: (err) => {
        console.log(err);
        toast.error(err.response.data.error);
      },
    }
  );

  return { mutate, isError, isLoading, isSuccess };
}
