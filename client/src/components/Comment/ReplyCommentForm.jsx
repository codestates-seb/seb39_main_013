/* eslint-disable */
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Button from "../Commons/Button";

function ReplyCommentForm(props) {
  const [text, setText] = useState("");
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

  console.log(props.replyparent);
  console.log(props.addReplyComment);
  return (
    <Container>
      <form className="replyComment-box" onSubmit={handleSubmit}>
        <textarea value={text} onChange={(e) => setText(e.target.value)}></textarea>
        <div className="replyComment-submitBox">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  .replyComment-box {
    width: 100%;
    max-width: 836px;
    display: flex;
    flex-direction: column;

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
  .replyComment-submitBox {
    display: flex;
    justify-content: end;
    align-items: center;
    margin-top: 20px;

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
`;

export default ReplyCommentForm;