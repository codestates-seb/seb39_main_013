/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

export default function ErrorPage(props) {
  const retryClickHandler = () => {
    props.retryAction();
  };
  return (
    <Container>
      <ContentWrapper>
        <span>{props.errorText}</span>
        <button onClick={retryClickHandler}>Retry</button>
      </ContentWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 32px;
    font-weight: 700;
  }

  button {
    background-color: #2d7df4;
    color: white;
    padding: 1rem;
    border-radius: 10px;
    border: none;
    font-size: 1rem;
    &:hover {
      opacity: 0.7;
    }
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
