/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

export default function OrderItem() {
  return (
    <Container>
      <ItemProfile>
        {/* <Link to={`/detail/${props.id}`}>
          <ImageWrapper>
            <img src={} alt="productImg" />
          </ImageWrapper>
          <ItemTextWrapper>
            <span></span>
            <span></span>
          </ItemTextWrapper>
        </Link> */}
      </ItemProfile>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d4d4d4;
  padding: 16px 0;
`;

const ItemProfile = styled.div`
  flex: 2;
  width: 100%;
  display: flex;
  justify-content: space-between;

  svg {
    fill: #656565;
  }

  a {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 24px;
  }
`;

const ImageWrapper = styled.div`
  img {
    border-radius: 10px;
    width: 126px;
    height: 126px;
    object-fit: cover;
  }
`;
