/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

export default function Button(props) {
  return <Container>{props.children}</Container>;
}

const Container = styled.button`
  background-color: #383838;
  padding: 9px 45px;
  color: #ffffff;
  cursor: pointer;
`;
