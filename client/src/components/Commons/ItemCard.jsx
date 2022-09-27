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
        <ImageWrapper>
          <ItemCardImg className="ItemCard-Image" img={props.productImg}>
            {isClicked ? ( //
              <AiFillHeart onClick={handleClicked} className="ItemCard-Heart" />
            ) : (
              <AiOutlineHeart onClick={handleClicked} className="ItemCard-Heart" />
            )}
          </ItemCardImg>
        </ImageWrapper>
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
  height: 380px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border: 2px solid red;

  a {
    text-decoration: none;
    color: black;
  }

  .ItemCard-Heart {
    font-size: 30px;
    margin: 0 1rem 1rem 0;
    z-index: 100;
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
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 190%;
`;

const ItemCardImg = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.img});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #f6eeed;
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
