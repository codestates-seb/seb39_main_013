/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useSelector } from "react-redux";
import NotificationModal from "../Modals/NotificationModal";
import OrderModal from "../Modals/OrderModal";
import Portal from "./Portal";

const modalList = {
  orderModal: OrderModal,
  cartModal: NotificationModal,
};

export default function ModalContainer() {
  const { type, props } = useSelector((state) => state.modal);

  if (!type) {
    return null;
  }

  const Modal = modalList[type];

  return (
    <Portal>
      <Modal {...props} />
    </Portal>
  );
}
