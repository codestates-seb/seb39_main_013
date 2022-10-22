/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

// eslint-disable-next-line
function SubBanner(props) {
  return (
    <Container>
      <div>
        <img src={props.imgUrl}></img>
      </div>
    </Container>
  );
}

const Container = styled.div`
  img {
    object-fit: cover;
    object-position: center;
    width: 100%;
    min-height: 240px;
  }
`;

export default SubBanner;
