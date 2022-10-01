/* eslint-disable react/prop-types */
import React, { memo } from "react";
import styled, { css } from "styled-components";
import { BiWon } from "react-icons/bi";

export default memo(function InputText(props) {
  return (
    <Container>
      <Label require={props.require} htmlFor={props.name}>
        {props.label}
      </Label>
      <InputWrapper>
        <InputArea
          name={props.name}
          onChange={(e) => props.changeHandler(e)}
          type={props.type}
          id={props.name}
          placeholder={props.text}
        />
        {props.mode === "price" && <BiWon />}
      </InputWrapper>
    </Container>
  );
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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

const InputArea = styled.input`
  width: 100%;
  font-size: 14px;
  border: none;
  outline: none;
  padding: 12px 1rem;
  border-radius: 10px;
  background-color: transparent;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #f1f1f1;
  border-radius: 10px;
  padding-right: 1rem;
`;
