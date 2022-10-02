import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
/* eslint-disable */
function RiviewForm(props) {
  const handleSubmit = () => {
    //qnaId와 name, email을 넣어서 api에 객체를 전달해준다.
  };

  const [qnaData, setQnaData] = useState(null); //주어진 자료를 기초로 텍스트가 변경될 때 textarea에 있는 아이를 추가해준다.

  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const isTextareaDisabled = text.length === 0;
  const [clickedRadioBtn, setClickedRadioBtn] = useState("5");

  const renderStar = () => <AiFillStar key={Math.random().toString(36).substr(2, 9)} />;
  const renderStars = (num) => [...Array(num)].map((num) => renderStar());

  const submitNewReview = (e) => {
    e.preventDefault();
    const newReview = {
      reviewId: Math.random().toString(36).substr(2, 9),
      reviewName: props.username,
      reviewEmail: props.userEmail,
      reviewCreatedAt: new Date().toLocaleString(),
      reviewContent: text,
      reviewStars: clickedRadioBtn,
    };

    props.addNewReview(newReview);
    setName("");
    setEmail("");
    setText("");
  };
  console.log(text);

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
          <div className="review-inputInfo">
            <input key="nameInput" className="inputForm" name={"Name"} type="text" placeholder="Name" value={props.userName} onChange={(e) => setName(e.target.value)} required readOnly />
            <input key="emailInput" className="inputForm" name={"Email"} type="email" placeholder="Email" value={props.userEmail} onChange={(e) => setEmail(e.target.value)} required readOnly />
          </div>
          <div className="review-content">
            <textarea value={text} onChange={(e) => setText(e.target.value)} required placeholder="리뷰를 작성해주세요. 로그인 하여야 작성이 가능합니다." />
          </div>
          <div className="submitBox">
            <button type="submit">Submit</button>
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
      p {
        margin-right: 10px;
      }
      label {
        margin: 0 5px;
        color: yellow;
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
