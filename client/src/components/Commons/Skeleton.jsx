/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
export default function Skeleton(props) {
  const arr = Array(props.size)
    .fill()
    .map((v, i) => i + 1);
  return arr.map((v) => {
    return (
      <Container key={v}>
        <div>
          <SkeletonCardImg className="ItemCard-Image"></SkeletonCardImg>
          <div className="ItemCard-Explain"></div>
        </div>
      </Container>
    );
  });
}

const Container = styled.div`
  width: 100%;
  max-width: 290px;
  max-height: 380px;
  display: flex;
  flex-direction: column;

  .ItemCard-Explain {
    height: 90px;
    width: 100%;
    align-items: center;
    margin-top: 8px;
    background-color: #ccc;
    border-radius: 10px;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 30px;
      height: 100%;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.5) 40%,
        rgba(255, 255, 255, 0) 70%
      );
      animation: loading 1.4s infinite linear;
    }
    overflow: hidden;
    position: relative;
  }
  overflow: hidden;
  position: relative;

  @keyframes loading {
    0% {
      transform: translateX(0);
    }
    50%,
    100% {
      transform: translateX(290px);
    }
  }
`;

const SkeletonCardImg = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  height: 290px;
  min-height: 130px;
  overflow: hidden;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.5) 40%,
      rgba(255, 255, 255, 0) 70%
    );
    animation: loading 1.4s infinite linear;
  }

  background-color: #ccc;
`;
