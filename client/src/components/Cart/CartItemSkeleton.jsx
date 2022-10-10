import React from "react";
import styled from "styled-components";
import { tablet } from "../../utils/styleTheme";

export default function CartItemSkeleton(props) {
  const arr = Array(props.size)
    .fill()
    .map((v, i) => i + 1);
  return arr.map((v) => {
    return (
      <Container key={v}>
        <ItemProfile>
          <div>
            <div className="skeleton__img"></div>
            <ItemTextWrapper>
              <span className="skeleton__item"></span>
              <span className="skeleton__item"></span>
            </ItemTextWrapper>
          </div>
        </ItemProfile>
        <ItemOptions>
          <OptionWrapper>
            <div className="skeleton__quantity">
              <span className="skeleton__item"></span>
              <span className="skeleton__item"></span>
            </div>
            <span className="skeleton__item"></span>
          </OptionWrapper>
        </ItemOptions>
        <TotalPrice>
          <span className="skeleton__item"></span>
        </TotalPrice>
      </Container>
    );
  });
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d4d4d4;
  padding: 16px 0;

  .skeleton__item,
  .skeleton__img {
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
      animation: loading 0.8s infinite linear;
    }
    overflow: hidden;
    position: relative;
  }

  @keyframes loading {
    0% {
      transform: translateX(0);
    }
    50%,
    100% {
      transform: translateX(140px);
    }
  }
`;

const ItemProfile = styled.div`
  flex: 2;
  width: 100%;
  display: flex;
  justify-content: space-between;

  .skeleton__img {
    width: 126px;
    height: 126px;
    border-radius: 10px;
    background-color: #ccc;
  }

  > div {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 24px;
  }

  @media ${tablet} {
    .skeleton__item {
      height: 20px;
    }
    > div {
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
    }
  }
`;

const ItemTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;

  span {
    background-color: #ccc;
    border-radius: 10px;
    width: 140px;
    height: 30px;
  }
`;

const OptionWrapper = styled.div`
  display: flex;
  max-width: 180px;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;

  > span {
    background-color: #ccc;
    border-radius: 10px;
    width: 100px;
    height: 30px;
  }

  .skeleton__quantity {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 14px;

    span {
      background-color: #ccc;
      border-radius: 10px;
      width: 100px;
      height: 30px;
    }
  }

  @media ${tablet} {
    flex-direction: column;
    align-items: flex-start;

    .skeleton__item,
    .skeleton__quantity > span {
      width: 90px;
      height: 20px;
    }
  }
`;

const ItemOptions = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const TotalPrice = styled.div`
  flex: 0.8;
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 700;
  justify-content: space-between;

  span {
    background-color: #ccc;
    border-radius: 10px;
    width: 100px;
    height: 30px;
  }

  @media ${tablet} {
    .skeleton__item {
      width: 80px;
    }
  }
`;
