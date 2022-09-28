/* eslint-disable react/prop-types */
import React, { memo } from "react";
import styled, { css } from "styled-components";
import { brandList, categoryList } from "../../constance";

export default memo(function InputSelect(props) {
  return (
    <Container>
      <Label require={props.require} htmlFor={props.name}>
        {props.label}
      </Label>
      <select
        id={props.name}
        name={props.name}
        onChange={(e) => props.changeHandler(e)}
      >
        <option value="">{props.text}</option>
        {props.name === "brand_name"
          ? brandList.map((v) => {
              return (
                <option key={v.id} value={v.name}>
                  {v.name}
                </option>
              );
            })
          : categoryList.map((v) => {
              return (
                <option key={v.id} value={v.name}>
                  {v.mainCategory}
                </option>
              );
            })}
      </select>
    </Container>
  );
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  select {
    font-size: 14px;
    margin: 0;
    background-color: #f1f1f1;
    border: none;
    outline: none;
    padding: 12px 0 12px 1rem;
    border-radius: 10px;
    border-right: 16px solid transparent;
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
