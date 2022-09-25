import React from "react";
import styled from "styled-components";

function Category() {
  return (
    <Conatainer>
      <div className="Category-Banner">
        {/* api가 나오면 적절히 페이지를 이동시켜줄 수 있어야한다. */}
        <a href="#">상의</a>
        <a href="#">하의</a>
        <a href="#">아우터</a>
        <a href="#">셔츠</a>
        <a href="#">신발</a>
        <a href="#">가방</a>
        <a href="#">악세서리</a>
      </div>
    </Conatainer>
  );
}

const Conatainer = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 160px;

  .Category-Banner {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d9d9d9;
  }

  a {
    margin: 0 20px;
    font-size: 22px;
    font-weight: bold;
    color: black;
    opacity: 0.6;

    &:hover {
      opacity: 1;
    }
  }
`;

export default Category;