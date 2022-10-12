/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { orderSuccess } from "../../constance/bannerImage";
import { closeModal } from "../../redux/reducer/modalSlice";

export default function NotificationModal(props) {
  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(closeModal());
  };

  return (
    <Container>
      <ModalBody>
        <ContentWrapper>
          <img src={orderSuccess} alt="order_success_img" />
          <span>{props.text}</span>
          <button onClick={closeHandler}>닫기</button>
        </ContentWrapper>
      </ModalBody>
    </Container>
  );
}

const Container = styled.article`
  position: fixed;
  z-index: 300;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBody = styled.section`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 500px;
  padding: 40px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  span {
    font-size: 18px;
  }

  button {
    width: 100%;
    max-width: 100px;
    border: 1px solid #ededed;
    background-color: transparent;
    padding: 10px 2rem;
    font-size: 1rem;
    border-radius: 10px;
    background-color: #cdcdcd;

    &:hover {
      opacity: 0.7;
    }
  }

  img {
    width: 100%;
    max-width: 360px;
  }
`;
