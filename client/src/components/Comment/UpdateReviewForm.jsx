/* eslint-disable */
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";

function UpdateReviewForm(props) {
  const [text, setText] = useState(props.initialText);
  const renderStar = () => <AiFillStar key={Math.random().toString(36).substr(2, 9)} />;
  const renderStars = (num) => [...Array(num)].map((num) => renderStar());
  const [clickedRadioBtn, setClickedRadioBtn] = useState(String(props.initialStars));

  return (
    <Container>
      <form className="updateReview-box">
        <div className="review-options">
          <p>Your Ratting</p>

          <label htmlFor="star1" key="star1">
            <input type="radio" id="star1" value={1} checked={clickedRadioBtn === "1"} onChange={(e) => setClickedRadioBtn(e.target.value)} />
            {renderStars(1)}
          </label>
          <label htmlFor="star2" key="star2">
            <input type="radio" id="star2" value={2} checked={clickedRadioBtn === "2"} onChange={(e) => setClickedRadioBtn(e.target.value)} />
            {renderStars(2)}
          </label>
          <label htmlFor="star3" key="star3">
            <input type="radio" id="star3" value={3} checked={clickedRadioBtn === "3"} onChange={(e) => setClickedRadioBtn(e.target.value)} />
            {renderStars(3)}
          </label>
          <label htmlFor="star4" key="star4">
            <input type="radio" id="star4" value={4} checked={clickedRadioBtn === "4"} onChange={(e) => setClickedRadioBtn(e.target.value)} />
            {renderStars(4)}
          </label>
          <label htmlFor="star5" key="star5">
            <input type="radio" id="star5" value={5} checked={clickedRadioBtn === "5"} onChange={(e) => setClickedRadioBtn(e.target.value)} />
            {renderStars(5)}
          </label>
        </div>
        <textarea value={text} onChange={(e) => setText(e.target.value)}></textarea>
        <div className="updateReview-submitBox">
          <button
            type="submit"
            onClick={() =>
              //취소 버튼을 누르면 setClicked qusetion에서 2번 인덱스 인자가 isEditing을 결정하는 요소이기 때문에 해당 요소만 false로 변경해준다.
              props.setClickedReview((curr) => {
                const newCurr = [...curr];
                newCurr[1] = false;
                return newCurr;
              })
            }
          >
            취소
          </button>
          <button type="button" onClick={() => props.updateReview(props.reviewId, text, clickedRadioBtn)}>
            수정
          </button>
        </div>
      </form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  .updateReview-box {
    width: 90%;
    max-width: 836px;
    display: flex;
    flex-direction: column;
    margin-top: 10px;

    .review-options {
      display: flex;
      padding: 10px 0;
      @media screen and (max-width: 482px) {
        flex-direction: column;
        font-size: 15px;
      }
      p {
        margin-right: 10px;
      }
      label {
        margin: 0 5px;
        color: #ebdb03;
      }
    }

    textarea {
      height: 150px;
      background-color: #f1f1f1;
      border: none;
      border-radius: 5px;
      resize: none;
      font-size: 17px;
      padding: 5px 5px;

      &:focus {
        outline: none;
      }
    }
  }
  .updateReview-submitBox {
    display: flex;
    justify-content: end;
    align-items: center;
    margin-top: 10px;

    button {
      padding: 3px 20px;
      color: black;
      font-weight: bolder;

      font-size: 16px;
      margin-left: 10px;
      border-radius: 5px;
      border: none;
      outline: none;
      &:nth-child(1) {
        background-color: rgba(255, 93, 93, 0.87);
      }
      &:nth-child(2) {
        background-color: rgba(0, 255, 98, 0.87);
      }
    }
  }
`;

export default UpdateReviewForm;
