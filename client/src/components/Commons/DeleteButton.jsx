/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import { TiDelete } from "react-icons/ti";

export default function DeleteButton(props) {
  return (
    <Container onClick={(e) => props.onClick(e)}>
      <TiDelete />
    </Container>
  );
}

const Container = styled.button`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;

  svg {
    width: 36px;
    height: 36px;

    fill: #2d7df4;
  }
`;
