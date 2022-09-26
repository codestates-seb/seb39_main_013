/* eslint-disable no-unused-vars */
import { useMutation } from "react-query";
import { signUpFn } from "../api";

export default function useSignUpMutation(value) {
  return useMutation(() => signUpFn(value), {
    onError: (err) => console.log(err),
  });
}
