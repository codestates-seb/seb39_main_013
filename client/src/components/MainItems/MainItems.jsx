/* eslint-disable react/prop-types */
import React from "react";
// eslint-disable-next-line
import styled from "styled-components";
import ItemCard from "../Commons/ItemCard";

// eslint-disable-next-line
function MainItems(props) {
  return (
    <Container>
      {props.productList.map((v) => {
        return (
          <ItemCard
            key={v.id}
            productImg={v.productImg}
            brand={v.brand}
            title={v.title}
            price={v.price}
          />
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 64px;
  width: 100%;
  max-width: 1280px;
`;

export default MainItems;

//한 라인에 4개씩 넣는다.
