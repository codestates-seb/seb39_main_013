/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

// eslint-disable-next-line
function SubBanner(props) {
  return (
    <Container>
      {/* 추후 이미지 소스를 아이템에 답긴 url 또는 페이지로 수정해 주어야 한다. */}
      {/* <img src={`${props.url}`}></img> */}
      <div href="https://www.naver.com">
        <img src={props.imgUrl}></img>
      </div>
    </Container>
  );
}

const Container = styled.div`
  img {
    /* height: 500px; */
    object-fit: fill;
    width: 100%;
  }
`;

export default SubBanner;
