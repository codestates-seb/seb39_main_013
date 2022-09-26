/* eslint-disable react/prop-types */
import React from "react";
import styled, { css } from "styled-components";

export default function SIgnButton(props) {
  return (
    <Container mode={props.mode} onClick={props.onClickHandler}>
      {props.children}
    </Container>
  );
}

const Container = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  padding: 14px;
  ${(props) =>
    props.mode === "login" &&
    css`
      background-color: #4763e4;
      color: #ffffff;
    `}
`;
