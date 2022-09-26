/* eslint-disable */
import React from "react";
import styled from "styled-components";
import Button from "../Commons/Button";

function ReplyCommentForm() {
  return (
    <Container>
      <form className="replyComment-box">
        <textarea></textarea>
        <div className="replyComment-submitBox">
          <Button>Submit</Button>
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
