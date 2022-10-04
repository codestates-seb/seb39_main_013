/* eslint-disable */

import React, { useEffect, useState } from "react";
// eslint-disable-next-line
import styled, { css } from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import Price from "./Price";
import useAddFavoriteItem from "../../hooks/useAddFavoriteItem";
import Loading from "./Loading";
import useDeleteFavorite from "../../hooks/useDeleteFavorite";
import { memo } from "react";

// eslint-disable-next-line
function ItemCard(props) {
  const [isClicked, setIsClicked] = useState(props.favorite);
  const addFavoriteAction = useAddFavoriteItem({ productId: props.id });
  const deleteFavoriteAction = useDeleteFavorite(props.id);

  useEffect(() => {
    setIsClicked(props.favorite);
  }, [props.favorite]);

  const handleClicked = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!props.isLogin) {
      return;
    }
    setIsClicked((curr) => !curr);

    if (!props.favorite) {
      addFavoriteAction.mutate();
    } else if (props.favorite) {
      deleteFavoriteAction.mutate();
    }
  };

  return (
    <Container>
      <Link to={`/detail/${props.id}`}>
        <ItemCardImg className="ItemCard-Image">
          <img src={props.productImg} alt="product_img" />
          {isClicked ? (
            <button onClick={handleClicked}>
              <AiFillHeart className="ItemCard-Heart" />
            </button>
          ) : (
            <button onClick={handleClicked}>
              <AiOutlineHeart className="ItemCard-Heart" />
            </button>
          )}
        </ItemCardImg>
        <div className="ItemCard-Explain">
          <TextBox brandName>{props.brand}</TextBox>
          <TextBox>{props.title}</TextBox>
          <Price price={props.price} />
        </div>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 290px;
  max-height: 380px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
    color: black;
  }

  button {
    position: absolute;
    border: none;
    background-color: transparent;
    margin: 0 1rem 1rem 0;
    z-index: 100;
  }

  .ItemCard-Heart {
    font-size: 30px;
    color: #ff696a;
  }

  .ItemCard-Explain {
    height: 90px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-top: 8px;
    font-size: 14px;
  }
`;

const ItemCardImg = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  border-radius: 10px;
  width: 100%;
  max-height: 290px;
  background-color: #ebf0f5;

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 10px;
  }
`;

const TextBox = styled.p`
  font-size: 14px;
  text-align: center;

  ${(props) =>
    props.brandName &&
    css`
      font-size: 1rem;
      font-weight: 800;
    `}
`;

export default ItemCard;
