import React, { useState } from "react";
// eslint-disable-next-line
import styled from "styled-components";

function MainItemsCategory() {
  const [btnActive, setBtnActive] = useState("1");
  const handleClicked = (e) => {
    //클릭시에 패치 요청을 보내서 적절한 아이템들을 띄우ㅓ 주어야 한다.

    setBtnActive(e.target.id);
    e.preventDefault();
  };

  return (
    <Container>
      <div className="Banner-Items">
        <a
          href="#"
          id="1"
          onClick={handleClicked}
          className={"Banner-Item " + (btnActive === "1" ? "active" : "")}
        >
          Best seller
        </a>
        <a
          href="#"
          id="2"
          onClick={handleClicked}
          className={"Banner-Item " + (btnActive === "2" ? "active" : "")}
        >
          New arrivals
        </a>
        <a
          href="#"
          id="3"
          onClick={handleClicked}
          className={"Banner-Item " + (btnActive === "3" ? "active" : "")}
        >
          Sale Item
        </a>
      </div>
    </Container>
  );
}

export default MainItemsCategory;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .Banner-Items {
    width: 700px;
    display: flex;
    justify-content: space-around;
  }

  a {
    color: black;
    text-decoration: none;
    font-size: 24px;
    font-weight: bold;
    padding-bottom: 6px;
    position: relative;

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
