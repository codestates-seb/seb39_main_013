/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { closeModal } from "../../redux/reducer/modalSlice";

export default function OrderModal(props) {
  const userInfo = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(closeModal());
  };
  const clickHandler = () => {
    closeHandler();
    if (!userInfo.isLogin) {
      props.setState(true);
    } else {
      props.action.mutate();
    }
  };
  return (
    <Container onClick={(e) => e.stopPropagation()}>
      <ModalBody>
        <TextWrapper>
          <img src={props.img} alt="productImg" />
          {props.text}
        </TextWrapper>
        <ButtonWrapper>
          <button className="modal__btn-success" onClick={() => clickHandler()}>
            넵
          </button>
          <button onClick={() => closeHandler()}>아뇨</button>
        </ButtonWrapper>
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
  height: 400px;
  padding: 40px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
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

  .modal__btn-success {
    background-color: #2d7df4;
    color: white;
  }
`;

const TextWrapper = styled.div`
  font-size: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
    max-width: 200px;
    position: relative;
    border-radius: 10px;
    background-color: #faf6e9;
    margin-bottom: 1rem;
  }
`;
