/* eslint-disable no-undef */
import React from "react";
import styled, { css } from "styled-components";
import { logoBanner } from "../../constance/bannerImage";
import { desktop, mobile, tablet } from "../../utils/styleTheme";

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

  @media ${tablet} {
    margin-top: 24px;
  }

  @media ${mobile} {
    margin-top: 32px;
  }

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
    @media ${desktop} {
      width: 50%;
    }

    @media ${tablet} {
      width: 50%;
    }

    @media ${mobile} {
      width: 100%;
    }
  }
`;

const TextWrapper = styled.span`
  font-size: 56px;
  font-weight: bold;
  letter-spacing: 8px;
  opacity: 1;

  @media ${tablet} {
    font-size: 40px;
  }

  ${(props) =>
    props.sub &&
    css`
      font-size: 1rem;
      font-weight: normal;
      /* opacity: 0.5; */
      color: #d8d8d8;
      letter-spacing: 4px;

      @media ${tablet} {
        font-size: 14px;
      }
    `}
`;
