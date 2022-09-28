/* eslint-disable */
import React from "react";
import { useState } from "react";
import styled from "styled-components";

function UpdateCommentForm(props) {
  const [text, setText] = useState(props.initialText);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newReply = {
      answerId: Math.random().toString(36).substr(2, 9),
      parentQuestion: props.replyparent.questionId,
      answerName: "답변자이당...",
      answerCreatedAt: new Date().toLocaleDateString(),
      answerContent: text,
    };
    props.addReplyComment(newReply);
    setText("");
  };

  console.log(props.updateQuestion);
  console.log(props.initialText);
  console.log(props.questionId);
  return (
    <Container>
      <form className="updateComment-box" onSubmit={handleSubmit}>
        <textarea value={text} onChange={(e) => setText(e.target.value)}></textarea>
        <div className="updateComment-submitBox">
          <button type="submit" onClick={() => props.updateQuestion(props.questionId, text)}>
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
  .updateComment-box {
    width: 100%;
    max-width: 836px;
    display: flex;
    flex-direction: column;
    margin-top: 10px;

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
  .updateComment-submitBox {
    display: flex;
    justify-content: end;
    align-items: center;
    margin-top: 10px;

    button {
      padding: 3px 20px;
      color: black;
      font-weight: bolder;
      background-color: rgba(0, 255, 98, 0.87);
      font-size: 16px;
      margin-left: 10px;
      border-radius: 5px;
      border: none;
      outline: none;
    }
  }
`;

export default UpdateCommentForm;
