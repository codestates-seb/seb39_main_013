/* eslint-disable */
import React from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";

function ReviewItem(props) {
  const renderStar = () => <AiFillStar key={Math.random().toString(36).substr(2, 9)} />;
  const renderStars = (num) => [...Array(num)].map((num) => renderStar()); //이부분에서 star
  return (
    <Container>
      <div className="productName">
        <p>productName</p>
      </div>
      <div className="review">
        <div className="reviewComment">
          <div className="reviewComment-image-container">
            <img src="/user-icon.png"></img>
          </div>
          <div className="reviewComment-right-part">
            <div className="reviewComment-content">
              <div className="reviewComment-content-top">
                <div className="reviewComment-content-top__left">
                  <div className="reviewComment-author">{props.review.reviewName}</div>
                  <div className="reviewComment-CreatedAt">{props.review.reviewCreatedAt}</div>
                </div>
                <div className="reviewComment-content-top__right">{<div>{renderStars(Number(props.review.reviewStars))}</div>}</div>
              </div>
              <div className="reviewComment-content_bottom">{<div className="reviewComment-text">{props.review.reviewContent}</div>} </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  max-width: 1280px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  border: 2px solid red;

  .productName {
    flex: 1;
    border: 2px solid blue;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .review {
    flex: 4;
    border: 2px solid blue;
  }
  .reviewComment {
    display: flex;
    width: 100%;
    align-items: center;
    max-width: 836px;
    height: auto;
    border-bottom: 1px solid rgba(124, 124, 124, 0.5);
    box-sizing: border-box;
    padding: 7px 0;
    border: 2px solid blue;
  }
  .reviewComment-image-container {
    img {
      border-radius: 50px;
    }
    width: 80px;

    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid red;
  }

  .reviewComment-right-part {
    flex: auto;
    font-size: 16px;
    border: 2px solid black;
    .reviewComment-content-top {
      display: flex;
    }
    .reviewComment-content-top__left {
      border: 2px solid turquoise;
      display: flex;
      flex: auto;
      .reviewComment-author {
        font-weight: bold;
      }
      .reviewComment-CreatedAt {
        margin-left: 10px;
        opacity: 0.7;
      }
    }
    .reviewComment-content-top__right {
      border: 2px solid black;
      display: flex;
      flex: auto;
      justify-content: end;
      align-items: center;
      padding-right: 5px;
      color: yellow;
    }
  }
`;

export default ReviewItem;
