/* eslint-disable */

import React, { useState } from "react";
// eslint-disable-next-line
import styled, { css } from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

// eslint-disable-next-line
function ItemCard(props) {
  const [isClicked, setIsClicked] = useState(props.favorite);

  const handleClicked = (e) => {
    e.preventDefault();
    setIsClicked((curr) => !curr);
    //추후에 post요청을 통하여 찜한 목록에 post요청 필요.
  };

  return (
    <Container>
      <Link to="/detail">
        <ItemCardImg className="ItemCard-Image">
          <img src={props.productImg} alt="" />
          {isClicked ? ( //
            <AiFillHeart onClick={handleClicked} className="ItemCard-Heart" />
          ) : (
            <AiOutlineHeart
              onClick={handleClicked}
              className="ItemCard-Heart"
            />
          )}
        </ItemCardImg>
        <div className="ItemCard-Explain">
          <TextBox brandName>{props.brand}</TextBox>
          <TextBox>{props.title}</TextBox>
          <TextBox>{props.price}</TextBox>
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

  .ItemCard-Heart {
    font-size: 30px;
    margin: 0 1rem 1rem 0;
    z-index: 100;
    color: #ff696a;
    position: absolute;
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
  }
`;

const ItemCardImg = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  border-radius: 10px;
  width: 100%;
  max-height: 290px;

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
