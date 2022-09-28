/* eslint-disable react/prop-types */
import React from "react";
import styled, { css } from "styled-components";

export default function Button(props) {
  console.log("button :", !props.disable);
  return (
    <Container
      disabled={!props.disable}
      mode={props?.mode}
      onClick={(e) => props.onClick(e)}
    >
      {props.children}
    </Container>
  );
}

const Container = styled.button`
  background-color: #383838;
  padding: 9px 45px;
  color: #ffffff;
  border: none;
  cursor: pointer;

  opacity: ${(props) => (props.disabled ? 0.5 : 1)};

  ${(props) =>
    props.mode === "apply" &&
    css`
      width: 100%;
      border: none;
      background-color: #2d7df4;
      color: white;
      border-radius: 10px;
      padding: 10px;
    `}
`;
