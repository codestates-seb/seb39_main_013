import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
/* eslint-disable */
function RiviewForm(props) {
  const [text, setText] = useState("");

  const [clickedRadioBtn, setClickedRadioBtn] = useState("5");

  const renderStar = () => (
    <AiFillStar key={Math.random().toString(36).substr(2, 9)} />
  );
  const renderStars = (num) => [...Array(num)].map((num) => renderStar());

  const submitNewReview = (e) => {
    e.preventDefault();
    const newReview = {
      productId: props.productId,
      productName: props.productName,
      reviewId: Math.random().toString(36).substr(2, 9),
      reviewName: props.userName,
      reviewEmail: props.userEmail,
      reviewCreatedAt: new Date().toLocaleString(),
      reviewContent: text,
      reviewStars: clickedRadioBtn,
    };

    props.addNewReview(newReview);

    setText("");
  };

  return (
    <Container>
      <div className="reviewBox">
        <div className="review-title">
          <p>ADD REVIEW</p>
        </div>
        <form onSubmit={submitNewReview}>
          <div className="review-options">
            <p>Your Ratting</p>

            <label htmlFor="star1" key="star1">
              <input
                type="radio"
                id="star1"
                value={1}
                checked={clickedRadioBtn === "1"}
                onChange={(e) => setClickedRadioBtn(e.target.value)}
              />
              {renderStars(1)}
            </label>
            <label htmlFor="star2" key="star2">
              <input
                type="radio"
                id="star2"
                value={2}
                checked={clickedRadioBtn === "2"}
                onChange={(e) => setClickedRadioBtn(e.target.value)}
              />
              {renderStars(2)}
            </label>
            <label htmlFor="star3" key="star3">
              <input
                type="radio"
                id="star3"
                value={3}
                checked={clickedRadioBtn === "3"}
                onChange={(e) => setClickedRadioBtn(e.target.value)}
              />
              {renderStars(3)}
            </label>
            <label htmlFor="star4" key="star4">
              <input
                type="radio"
                id="star4"
                value={4}
                checked={clickedRadioBtn === "4"}
                onChange={(e) => setClickedRadioBtn(e.target.value)}
              />
              {renderStars(4)}
            </label>
            <label htmlFor="star5" key="star5">
              <input
                type="radio"
                id="star5"
                value={5}
                checked={clickedRadioBtn === "5"}
                onChange={(e) => setClickedRadioBtn(e.target.value)}
              />
              {renderStars(5)}
            </label>
          </div>
          <div className="review-inputInfo">
            <input
              key="nameInput"
              className="inputForm"
              name={"Name"}
              type="text"
              placeholder="Name"
              value={props.userName}
              onChange={(e) => setName(e.target.value)}
              required
              readOnly
            />
            <input
              key="emailInput"
              className="inputForm"
              name={"Email"}
              type="email"
              placeholder="Email"
              value={props.userEmail}
              onChange={(e) => setEmail(e.target.value)}
              required
              readOnly
            />
          </div>
          <div className="review-content">
            <textarea //
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
              placeholder="리뷰를 작성해주세요. 로그인 하여야 작성이 가능합니다."
              readOnly={!props.userIsLogin}
              maxLength={400}
            />
          </div>
          <div className="submitBox">
            <p>{text.length}/400</p>
            <button type="submit" disabled={!props.userIsLogin}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
}

const Container = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  display: flex;
  justify-content: center;

  .reviewBox {
    width: 70%;

    transition: width 0.3s;
    @media screen and (max-width: 758px) {
      width: 90%;
    }

    margin-top: 48px;

    > div {
      margin: 10px 0;
    }
    .review-title {
      display: flex;
      justify-content: center;
      font-weight: bold;
      padding: 20px 0;
      p {
        font-size: 24px;
        font-weight: bold;
      }
    }
    .review-options {
      display: flex;
      padding: 10px 0;
      transition: font-size 1s;
      @media screen and (max-width: 758px) {
        font-size: 15px;
      }
      @media screen and (max-width: 482px) {
        flex-direction: column;
      }

      p {
        margin-right: 10px;
      }
      label {
        margin: 0 5px;
        color: #ebdb03;
      }
    }

    .review-inputInfo {
      display: flex;
      margin-bottom: 10px;

      gap: 10px;
      input {
        width: 100%;
        background-color: #f1f1f1;
        border-radius: 5px;
        border: none;
        font-size: 14px;
        padding: 5px 5px;
      }
    }

    .review-content {
      textarea {
        height: 150px;
        width: 100%;
        background-color: #f1f1f1;
        border: none;
        border-radius: 5px;
        resize: none;
        padding: 5px 5px;
        font-size: 17px;
        margin-bottom: 5px;

        &:focus {
          outline: none;
        }
      }
    }
    .submitBox {
      display: flex;
      justify-content: end;

      button {
        padding: 3px 20px;
        color: white;
        font-weight: bolder;
        background-color: #383838;
        font-size: 16px;
        margin-left: 10px;
        border-radius: 5px;
      }
    }
  }
`;

export default RiviewForm;
