/* eslint-disable */
import React from "react";
import { useState } from "react";
import styled from "styled-components";

function UpdateCommentForm(props) {
  const [text, setText] = useState(props.initialText);

  return (
    <Container>
      <form className="updateComment-box">
        <textarea value={text} onChange={(e) => setText(e.target.value)}></textarea>
        <div className="updateComment-submitBox">
          <button
            type="submit"
            onClick={() =>
              //취소 버튼을 누르면 setClicked qusetion에서 2번 인덱스 인자가 isEditing을 결정하는 요소이기 때문에 해당 요소만 false로 변경해준다.
              props.setClickedQuestion((curr) => {
                const newCurr = [...curr];
                newCurr[2] = false;
                return newCurr;
              })
            }
          >
            취소
          </button>
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
      &:nth-child(1) {
        background-color: rgba(255, 93, 93, 0.87);
      }
      &:nth-child(2) {
        background-color: rgba(0, 255, 98, 0.87);
      }
    }
  }
`;

export default UpdateCommentForm;
