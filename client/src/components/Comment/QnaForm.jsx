import React from "react";
import { useState } from "react";
import styled from "styled-components";

/* eslint-disable */
function QnaForm(props) {
  const [text, setText] = useState("");
  const [name, setName] = useState(props.userName);
  const [email, setEmail] = useState(props.userEmail);

  const submitNewComment = (e) => {
    e.preventDefault();
    const newComment = {
      productId: props.productId,
      questionId: Math.random().toString(36).substr(2, 9),
      questionName: name,
      questionEmail: email,
      questionCreatedAt: new Date().toLocaleString(),
      questionContent: text,
    };
    props.addComment(newComment);

    setText("");
  };

  return (
    <Container>
      <div className="QnaBox">
        <div className="Qna-title">
          <p>ADD QnA</p>
        </div>
        <form onSubmit={submitNewComment}>
          <div className="Qna-options">
            <p>Your Ratting</p>
            <label>
              <input className="Qna-options__checkBox" type="checkbox" id="isSecret" />
              비공개
            </label>
          </div>
          <div className="Qna-inputInfo">
            <input
              className="inputForm" //
              name={"Name"}
              type="text"
              placeholder="Name"
              value={props.userName}
              onChange={(e) => setName(e.target.value)}
              required
              readOnly
            />
            <input //
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
          <div className="Qna-content">
            <textarea //
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
              placeholder="질문을 작성해주세요. 로그인 하여야 작성이 가능합니다."
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

  .QnaBox {
    width: 70%;
    transition: width 0.3s;
    > div {
      margin: 10px 0;
    }
    @media screen and (max-width: 758px) {
      width: 90%;
    }
    .Qna-title {
      display: flex;
      justify-content: center;
      font-weight: bold;
      padding: 20px 0;
      p {
        font-size: 24px;
        font-weight: bold;
      }
    }
    .Qna-options {
      display: flex;
      padding: 10px 0;
      p {
        margin-right: 10px;
      }

      .Qna-options__checkBox {
        margin: 0 5px;
      }
    }

    .Qna-inputInfo {
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

    .Qna-content {
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

export default QnaForm;
