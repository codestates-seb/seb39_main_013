import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { notFound } from "../constance/bannerImage";

export default function NotFoundPage() {
  return (
    <Container>
      <ImageWrapper>
        <img src={notFound} alt="notFoundImg" />
        <Link to={"/"}>Go to MainPage</Link>
      </ImageWrapper>
    </Container>
  );
}

const Container = styled.article`
  width: 100vw;
  height: 80vh;
`;

const ImageWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  img {
    width: 50%;
    height: 50%;
    object-fit: contain;
  }

  a {
    background-color: #2d7df4;
    color: white;
    padding: 1rem;
    border-radius: 10px;
  }
`;
