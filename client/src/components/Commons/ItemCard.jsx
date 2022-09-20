/* eslint-disable */

import React, { useState } from "react";
// eslint-disable-next-line
import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";



// eslint-disable-next-line
function ItemCard(props) {

    const [isClicked, setIsClicked] = useState(false)

    const handleClicked = (e) =>{
       
        setIsClicked(curr => !curr);
        e.preventDefault();
        
    }
  return (
    <Container>
      <a href="https://naver.com">
        <div className="ItemCard-Image">
            {isClicked ?  <AiFillHeart onClick={handleClicked} className="ItemCard-Heart"/> :  <AiOutlineHeart onClick={handleClicked} className="ItemCard-Heart" />}
        </div> 
        <div className="ItemCard-Explain">
            
            {/* <p className='ItemCard-Explain__brand'>{props.brand}</p>
                    <p className='ItemCard-Explain__title'>{props.title}</p>
                    <p className='ItemCard-Explain__price'>{props.price}</p> */}
            <p className="ItemCard-Explain__brand">Brand</p>
            <p className="ItemCard-Explain__title">Title</p>
            <p className="ItemCard-Explain__price">
                Price <br /><p>즉시구매가</p>
            </p>
        
        </div>
      </a>
    </Container>
  );
}

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
    background-image: url(https://codingapple1.github.io/shop/shoes1.jpg);
    background-size: 100% 100%;
    background-position: center;   
  }

  .ItemCard-Heart {
    position: relative;
    top: 240px;
    left: 230px;
    font-size: 30px;
    margin-bottom: 0px;
    z-index: 100;
    color: pink;
    padding: 3px;
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

export default ItemCard;
