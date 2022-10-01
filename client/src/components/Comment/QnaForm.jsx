import React from "react";
import { useState } from "react";
import styled from "styled-components";

/* eslint-disable */
function QnaForm(props) {
  const handleSubmit = () => {
    //qnaId와 name, email을 넣어서 api에 객체를 전달해준다.
  };

  const [qnaData, setQnaData] = useState(null); //주어진 자료를 기초로 텍스트가 변경될 때 textarea에 있는 아이를 추가해준다.

  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const isTextareaDisabled = text.length === 0;

  const submitNewComment = (e) => {
    e.preventDefault();
    const newComment = {
      questionId: Math.random().toString(36).substr(2, 9),
      questionName: name,
      questionCreatedAt: new Date().toLocaleString(),
      questionContent: text,
    };
    props.addComment(newComment);
    setName("");
    setEmail("");
    setText("");
  };
  console.log(text);
  console.log(name);
  console.log(email);
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
            <input className="inputForm" name={"Name"} type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input className="inputForm" name={"Email"} type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="Qna-content">
            <textarea value={text} onChange={(e) => setText(e.target.value)} required />
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

  .QnaBox {
    width: 70%;
    > div {
      margin: 10px 0;
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
