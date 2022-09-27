/* eslint-disable no-unused-vars */
import { useMutation } from "react-query";
import { signUpFn } from "../api";

export default function useSignUpMutation(value) {
  const { mutate, isError, isLoading } = useMutation(() => signUpFn(value));

  return { mutate, isError, isLoading };
}
