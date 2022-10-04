/* eslint-disable */
import React from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

function ReviewItem(props) {
  const renderStar = () => <AiFillStar key={Math.random().toString(36).substr(2, 9)} />;
  const renderStars = (num) => [...Array(num)].map((num) => renderStar()); //이부분에서 star
  return (
    <Container>
      <div className="productName">
        <Link to={`/detail/${props.review.productId}`}>
          <p>{props.review.productName}</p>
        </Link>
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
  height: 130px;

  border-bottom: 1px solid rgba(124, 124, 124, 0.5);

  .productName {
    flex: 2;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      text-decoration: none;
      color: black;

      width: 100%;
      padding: 0 5px;
      display: block;
    }
  }
  .review {
    flex: 8;
    width: 100%;
    height: 110px;
    display: flex;
  }
  .reviewComment {
    display: flex;
    width: 100%;
    align-items: center;
    max-width: 836px;
    height: auto;

    box-sizing: border-box;
    padding: 7px 0;
  }
  .reviewComment-image-container {
    img {
      border-radius: 50px;
    }
    width: 80px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .reviewComment-right-part {
    flex: 100%;
    font-size: 16px;

    .reviewComment-content-top {
      display: flex;
      padding-bottom: 5px;
    }
    .reviewComment-content-top__left {
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
      display: flex;
      flex: auto;
      justify-content: end;
      align-items: center;
      padding-right: 5px;
      color: #ebdb03;
    }
    .reviewComment-content_bottom {
      .reviewComment-text {
        height: auto;
        word-break: break-all;
        white-space: normal;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
  }
`;

export default ReviewItem;
