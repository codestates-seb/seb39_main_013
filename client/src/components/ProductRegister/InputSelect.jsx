/* eslint-disable react/prop-types */
import React from "react";
import styled, { css } from "styled-components";

export default function InputSelect(props) {
  return (
    <Container>
      <Label require={props.require} htmlFor={props.name}>
        {props.label}
      </Label>
      <select id={props.name}>
        <option value="">{props.text}</option>
        <option value="Nike">{"Nike"}</option>
        <option value="Adidas">{"Adidas"}</option>
      </select>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  select {
    font-size: 14px;
    background-color: #f1f1f1;
    border: none;
    outline: none;
    padding: 12px 1rem;
    border-radius: 10px;
    border-right: 16px solid transparent;
    /* -webkit-appearance: none;
    -moz-appearance: none; */
  }
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: 700;

  ${(props) =>
    props.require &&
    css`
      &::after {
        color: #ff5252;
        content: " *";
      }
    `}
`;
