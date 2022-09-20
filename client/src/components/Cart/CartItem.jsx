/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import QuantitySelector from "./QuantitySelector";
import { FaWonSign } from "react-icons/fa";

export default function CartItem(props) {
  return (
    <Container>
      <ItemProfile>
        <a href="#">
          <ImageWrapper>
            <img src={props.itemImg} alt="productImg" />
          </ImageWrapper>
          <ItemTextWrapper>
            <span>{props.brandName}</span>
            <span>{props.itemTitle}</span>
          </ItemTextWrapper>
        </a>
      </ItemProfile>
      <ItemOptions>
        {props.option.map((v, i) => {
          return (
            <OptionWrapper
              key={v.id}
              border={
                i !== props.option.length - 1 && props.option.length !== 0
                  ? "bottom"
                  : "top"
              }
            >
              <div>
                <span>
                  {v.size} / {v.color}
                </span>
                <QuantitySelector productQuantity={v.quantity} />
              </div>
              <span>
                <FaWonSign />
                {props.price}
              </span>
            </OptionWrapper>
          );
        })}
      </ItemOptions>
      <TotalPrice>
        <FaWonSign />
        203939
      </TotalPrice>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d4d4d4;
  padding: 16px 0;
`;

const ItemProfile = styled.div`
  flex: 2;
  width: 100%;
  display: flex;
  justify-content: space-between;

  svg {
    fill: #656565;
  }

  a {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 24px;
  }
`;

const ImageWrapper = styled.div`
  img {
    border-radius: 10px;
    width: 126px;
    height: 126px;
    object-fit: cover;
  }
`;

const ItemTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  color: #525252;
  gap: 4px;

  span {
    &:nth-child(2) {
      font-size: 14px;
      color: #707070;
    }
  }
`;

const ItemOptions = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const OptionWrapper = styled.div`
  display: flex;
  width: fit-content;
  gap: 1rem;
  /* padding: 16px 0; */

  border-bottom: ${(props) => props.border === "bottom" && "1px solid #d4d4d4"};

  padding: ${(props) =>
    props.border === "bottom" ? "0 0 1rem 0" : "1rem 0 0 0"};
  > div {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 14px;

    span {
      font-size: 14px;
    }
  }

  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    font-size: 14px;
    svg {
      fill: #656565;
      margin-bottom: 4px;
    }
  }
`;

const TotalPrice = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 4px;

  svg {
    fill: #656565;
    margin-bottom: 2px;
  }
`;
