/* eslint-disable no-unused-vars */
import { useMutation } from "react-query";
import { signUpFn } from "../api";

export default function useSignUpMutation(value) {
  const { mutate, isError, isLoading, isSuccess } = useMutation(() =>
    signUpFn(value)
  );

  return { mutate, isError, isLoading, isSuccess };
}
