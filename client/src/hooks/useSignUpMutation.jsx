/* eslint-disable no-unused-vars */
import { useMutation } from "react-query";
import { axiosInstance } from "../api/axiosInstance";

const signUpFn = async (payload) => {
  const res = await axiosInstance.post("/api/v1/members", payload);
  return res.data;
};

export default function useSignUpMutation(value) {
  const { mutate, isError, isLoading, isSuccess } = useMutation(() =>
    signUpFn(value)
  );

  return { mutate, isError, isLoading, isSuccess };
}
