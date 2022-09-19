/* eslint-disable */

import React from "react";
// eslint-disable-next-line
import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

let Container = styled.div`
  width: 290px;
  height: 380px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: black;
  }

  .ItemCard-Image {
    border-radius: 10px;
    width: 290px;
    height: 290px;
  }

  .ItemCard-Heart {
    position: relative;
    top: -50px;
    left: 250px;
    font-size: 30px;
    margin-bottom: 0px;
  }

  .ItemCard-Explain {
    height: 90px;
    width: 290px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    p {
      font-weight: 800;
      padding-left: 5px;
    }
    .ItemCard-Explain__brand {
      text-decoration: underline;
      color: #3d3d3d;
    }
    .ItemCard-Explain__price {
      p {
        font-size: 12px;
        opacity: 0.5;
        line-height: 60%;
        padding: 0;
      }
    }
  }
`;

// eslint-disable-next-line
function ItemCard(props) {
  return (
    <Container>
      <a href="https://naver.com">
        <img
          className="ItemCard-Image"
          src={`https://codingapple1.github.io/shop/shoes1.jpg`}
          width="100%"
        ></img>
      </a>
      <div className="ItemCard-Explain">
        <a href="https://naver.com">
          {/* <p className='ItemCard-Explain__brand'>{props.brand}</p>
                    <p className='ItemCard-Explain__title'>{props.title}</p>
                    <p className='ItemCard-Explain__price'>{props.price}</p> */}
          <p className="ItemCard-Explain__brand">Brand</p>
          <p className="ItemCard-Explain__title">Title</p>
          <p className="ItemCard-Explain__price">
            Price <br />
            <p>즉시구매가</p>
          </p>
        </a>
      </div>
    </Container>
  );
}

export default ItemCard;
