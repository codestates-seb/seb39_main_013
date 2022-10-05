import React from "react";
import styled from "styled-components";

export default function DetailSkeleton() {
  return (
    <Container>
      <OrderWrapper>
        <ImageWrapper></ImageWrapper>
        <TextWrapper>
          <BoxHeader>
            <p className="skeleton__title"></p>
            <p className="skeleton__price"></p>
          </BoxHeader>
          <BoxBody>
            <p className="skeleton__size--title"></p>
          </BoxBody>
          <SubWrapper>
            <p className="skeleton__size--title"></p>
          </SubWrapper>
          <BoxFooter>
            <p className="skeleton__desc"></p>
            <p className="skeleton__desc"></p>
          </BoxFooter>
          <ButtonWrapper>
            <p className="skeleton__desc"></p>
            <p className="skeleton__desc"></p>
          </ButtonWrapper>
        </TextWrapper>
      </OrderWrapper>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  max-width: 1280px;
  height: 100%;
  flex-direction: column;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 80px;

  @keyframes loading {
    0% {
      transform: translateX(0);
    }
    50%,
    100% {
      transform: translateX(800px);
    }
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 620px;
  height: 620px;
  background-color: #ccc;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.5) 40%,
      rgba(255, 255, 255, 0) 70%
    );
    animation: loading 2.4s infinite linear;
  }
  overflow: hidden;
  position: relative;
`;

const OrderWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 40px;
  padding-bottom: 80px;
  border-bottom: 1px solid #d4d4d4;
  overflow: hidden;
  position: relative;
  @media screen and (max-width: 1280px) {
    place-items: center;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
  }
`;

const TextWrapper = styled.div`
  padding: 32px 24px;
  width: 100%;
  max-width: 620px;

  .skeleton__title {
    width: 60%;
    height: 60px;
  }

  .skeleton__price {
    width: 30%;
  }

  .skeleton__size--title {
    width: 100%;
    height: 60px;
  }

  .skeleton__desc {
    width: 100%;
    height: 40px;
  }

  p {
    height: 30px;
    background-color: brown;
    border-radius: 10px;
    background-color: #ccc;
    overflow: hidden;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 30px;
      height: 100%;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.5) 40%,
        rgba(255, 255, 255, 0) 70%
      );
      animation: loading 1.4s infinite linear;
    }
  }

  overflow: hidden;
  position: relative;
`;

const BoxHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-bottom: 24px;
  border-bottom: 1px solid #d4d4d4;
`;

const BoxBody = styled.div`
  padding-bottom: 40px;
  margin-top: 16px;
  border-bottom: 1px solid #d4d4d4;
`;

const SubWrapper = styled.div`
  border-bottom: 1px solid #d4d4d4;
  margin-top: 16px;

  padding-bottom: 32px;
`;

const BoxFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid #d4d4d4;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;
