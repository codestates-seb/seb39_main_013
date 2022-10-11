/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NoItems(props) {
  return (
    <Container>
      <span>No Items</span>
      {props.shopLink && <Link to={"/shop"}>Go to Shop</Link>}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 200px;
  gap: 2rem;

  span {
    font-size: 32px;
    font-weight: 600;
    color: #49474c;
  }

  a {
    background-color: #2d7df4;
    color: white;
    padding: 10px 1rem;
    border-radius: 10px;
  }
`;
