/* eslint-disable no-unused-vars */
import { useDispatch } from "react-redux";
import { closeModal, openModal } from "../redux/reducer/modalSlice";

export default function useModal() {
  const dispatch = useDispatch();

  const handleOpenModal = ({ type, props }) => {
    dispatch(openModal({ type, props }));
  };

  const handleCloseModal = ({ type }) => {
    dispatch(closeModal());
  };

  return { openModal: handleOpenModal, closeModal: handleCloseModal };
}
