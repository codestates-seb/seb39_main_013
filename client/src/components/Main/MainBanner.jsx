import React from "react";
import styled from "styled-components";
import MainCarousel from "../Carousels/MainCarousel";

export default function MainBanner() {
  return (
    <Container>
      <MainCarousel />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
