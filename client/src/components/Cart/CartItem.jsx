/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { memo, useEffect, useState } from "react";
import styled from "styled-components";
import QuantitySelector from "./QuantitySelector";
import { FaWonSign } from "react-icons/fa";
import DeleteButton from "../Commons/DeleteButton";
import { Link } from "react-router-dom";
import Price from "../Commons/Price";
import useDeleteCartData from "../../hooks/useDeleteCartData";
import Loading from "../Commons/Loading";
import { tablet } from "../../utils/styleTheme";

export default memo(function CartItem(props) {
  const [quantity, setQuantity] = useState(0);
  const deleteCartItemAction = useDeleteCartData(props.cartId, setQuantity);

  useEffect(() => {
    props.setTotalPrice((prev) => {
      return { ...prev, [props.cartId]: props.price * quantity };
    });
  }, [quantity, props.cartId]);

  const deleteCartHandler = (e) => {
    e.preventDefault();
    deleteCartItemAction.mutate();
  };

  if (deleteCartHandler.isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <ItemProfile>
        <Link to={`/detail/${props.id}`}>
          <ImageWrapper>
            <img src={props.itemImg} alt="productImg" />
          </ImageWrapper>
          <ItemTextWrapper>
            <span>{props.brandName}</span>
            <span>{props.itemTitle}</span>
          </ItemTextWrapper>
        </Link>
      </ItemProfile>
      <ItemOptions>
        <OptionWrapper>
          <div>
            <span>{props.size}</span>
            <QuantitySelector
              setQuantity={setQuantity}
              productQuantity={1}
              maxQuantity={props.maxQuantity}
            />
          </div>
          <span>
            <FaWonSign />
            <Price price={props.price} />
          </span>
        </OptionWrapper>
      </ItemOptions>
      <TotalPrice>
        <div>
          <FaWonSign />
          <Price price={props.price * quantity} />
        </div>
        <DeleteButton onClick={deleteCartHandler} />
      </TotalPrice>
    </Container>
  );
});

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

  @media ${tablet} {
    a {
      flex-direction: column;
    }
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

  @media ${tablet} {
    align-items: center;
    justify-content: center;

    span {
      text-align: center;
    }
  }

  span {
    font-weight: 600;
    &:nth-child(2) {
      font-weight: normal;
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
  max-width: 180px;
  gap: 1rem;
  justify-content: space-between;
  border-bottom: ${(props) => props.border === "bottom" && "1px solid #d4d4d4"};

  padding: ${(props) =>
    props.border === "bottom" ? "0 0 1rem 0" : "1rem 0 0 0"};
  > div {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 14px;

    span {
      font-size: 15px;
      font-weight: 600;
    }
  }

  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    font-size: 1rem;
    svg {
      fill: #656565;
    }
  }

  @media ${tablet} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const TotalPrice = styled.div`
  flex: 0.8;
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 700;
  justify-content: space-between;

  svg {
    fill: #656565;
    margin-bottom: -2px;
  }

  @media ${tablet} {
    flex-direction: column-reverse;
    div {
      svg {
        display: none;
      }
    }
  }
`;
