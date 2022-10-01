import { useMutation } from "react-query";
import { productRegisterFn } from "../api";

export default function useProductRegister(info) {
  const { mutate, isSuccess } = useMutation(() => productRegisterFn(info));
  return { mutate, isSuccess };
}
