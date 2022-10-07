/* eslint-disable */
import React, { useState } from "react";
// eslint-disable-next-line
import styled from "styled-components";

function CommentCategory(props) {
  const [btnActive, setBtnActive] = useState(props.name[0]);
  const handleClicked = (e) => {
    //클릭시에 패치 요청을 보내서 적절한 아이템들을 띄워 주어야 한다.
    setBtnActive(e.target.id);
    props.setClickedCategory(e.target.id);
    e.preventDefault();
  };

  return (
    <Container>
      <div className="Banner-Items">
        <button
          id={props.name[0]}
          onClick={handleClicked}
          className={
            "Banner-Item " + (btnActive === props.name[0] ? "active" : "")
          }
        >
          {props.name[0]}
        </button>
        <button
          id={props.name[1]}
          onClick={handleClicked}
          className={
            "Banner-Item " + (btnActive === props.name[1] ? "active" : "")
          }
        >
          {props.name[1]}
        </button>
        <button
          id={props.name[2]}
          onClick={handleClicked}
          className={
            "Banner-Item " + (btnActive === props.name[2] ? "active" : "")
          }
        >
          {props.name[2]}
        </button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 32px;

  .Banner-Items {
    width: 100%;
    max-width: 700px;
    display: flex;
    justify-content: space-around;

    button {
      flex: 1;
    }
  }

  button {
    color: black;
    text-decoration: none;
    font-size: 24px;
    font-weight: 900;
    padding-bottom: 16px;
    position: relative;
    outline: none;
    border: 0;
    background-color: white;

    &::after {
      background: none repeat scroll 0 0 transparent;
      bottom: 0;
      content: "";
      display: block;
      height: 2px;
      position: absolute;
      background: #2d7df4;
      transition: all 0.2s ease-in-out;
      transition-duration: 0.3s;
      width: 0;
      opacity: 0;
    }
  }

  .active {
    &::after {
      width: 100%;
      opacity: 1;
    }
  }
`;

export default CommentCategory;
