/* eslint-disable react/prop-types */
import React, { memo, useState } from "react";
import styled from "styled-components";

export default memo(function SignInput(props) {
  const [check, setCheck] = useState(true);

  const checkValidate = (value) => {
    const isValidate = props.onBlur(value);
    props.setValid(isValidate);
    setCheck(isValidate);
  };

  return (
    <Container>
      <label htmlFor={props.name}>{props.label}</label>
      <InputWrapper>
        <input
          type={props.type || "text"}
          id={props.name}
          placeholder={props.text}
          name={props.name}
          onChange={(e) => props.changeHandler(e)}
          onBlur={() => checkValidate(props.value)}
        />
      </InputWrapper>
      {!check && <ErrorMassage>{props.errorMassage}</ErrorMassage>}
    </Container>
  );
});

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InputWrapper = styled.div`
  border-bottom: 1px solid #9e9e9e;

  input {
    width: 100%;
    font-size: 14px;
    margin-bottom: 8px;
    border: none;
    outline: none;
    line-height: 1.2rem;
  }
`;

const ErrorMassage = styled.span`
  color: #eb5252;
  font-size: 14px;
`;
