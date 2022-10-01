/* eslint-disable no-undef */
import React from "react";
import styled, { css } from "styled-components";
import { logoBanner } from "../../constance/bannerImage";

export default function MainTextBanner() {
  return (
    <Container>
      <div>
        <TextWrapper>state mall</TextWrapper>
        <TextWrapper sub>“Fashions fade, style is eternal.”</TextWrapper>
        <TextWrapper sub> - Yves Saint Laurent</TextWrapper>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 56px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    width: 30%;
    height: 100%;
    gap: 1rem;
    &::before {
      content: "";
      background-image: url(${logoBanner});
      background-repeat: no-repeat;
      background-position: center;
      opacity: 0.07;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
`;

const TextWrapper = styled.span`
  font-size: 56px;
  font-weight: bold;
  letter-spacing: 8px;
  opacity: 1;

  ${(props) =>
    props.sub &&
    css`
      font-size: 1rem;
      font-weight: normal;
      /* opacity: 0.5; */
      color: #d8d8d8;
      letter-spacing: 4px;
    `}
`;
