/* eslint-disable */
import React from "react";
import styled from "styled-components";

function ReplyCommentForm() {
  return (
    <Container>
      <form className="replyComment-box">
        <textarea></textarea>
        <div className="replyComment-submitBox">
          <label>
            <input type="checkbox" id="isSecret" />
            비공개
          </label>
          <button>SUBMIT</button>
        </div>
      </form>
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
  .replyComment-box {
    width: 70%;

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

    input {
      margin: 0 10px;
    }

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
