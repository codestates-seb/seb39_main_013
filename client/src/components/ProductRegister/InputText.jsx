/* eslint-disable react/prop-types */
import React from "react";
import styled, { css } from "styled-components";

export default function InputText(props) {
  console.log(props.require);
  return (
    <Container>
      <Label require={props.require} htmlFor={props.name}>
        {props.label}
      </Label>
      <input type="text" id={props.name} placeholder={props.text} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    font-size: 14px;
    background-color: #f1f1f1;
    border: none;
    outline: none;
    padding: 12px 1rem;
    border-radius: 10px;
  }
`;

const Label = styled.label`
  font-size: 1rem;

  ${(props) =>
    props.require &&
    css`
      &::after {
        color: #ff5252;
        content: " *";
      }
    `}
`;
