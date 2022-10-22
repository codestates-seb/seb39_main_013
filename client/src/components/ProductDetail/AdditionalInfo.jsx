/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

export default function AdditionalInfo(props) {
  return (
    <Container>
      {props.contentImg.map((v, i) => {
        return <img key={i} src={v} />;
      })}
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  padding: 20%;

  img {
    width: 100%;
  }
`;
