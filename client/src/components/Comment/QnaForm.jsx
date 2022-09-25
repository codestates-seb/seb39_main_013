import React from "react";
import styled from "styled-components";

/* eslint-disable */
function QnaForm() {
  return (
    <Container>
      <div className="QnaBox">
        <div className="Qna-title">
          <h3>ADD QnA</h3>
        </div>
        <div className="Qna-options">
          <p>Your Ratting</p>
          <label>
            <input className="Qna-options__checkBox" type="checkbox" id="isSecret" />
            비공개
          </label>
        </div>
        <div className="Qna-inputInfo">
          <InputForm className="inputForm" name={"Name"} type="text" />
          <InputForm className="inputForm" name={"Email"} type="email" />
        </div>
        <div className="Qna-content">
          <textarea></textarea>
        </div>
      </div>
    </Container>
  );
}

function InputForm(props) {
  return <input name={props.name} placeholder={props.name} type={props.type}></input>;
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

      gap: 10px;
      input {
        width: 100%;
        background-color: #f1f1f1;
        border-radius: 5px;
        border: none;
        font-size: 17px;
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

        &:focus {
          outline: none;
        }
      }
    }
  }
`;

export default QnaForm;
