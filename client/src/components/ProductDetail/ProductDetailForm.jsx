/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import { productData } from "../../constance";
import Comments from "../Comment/Comments";
import AdditionalInfo from "./AdditionalInfo";
import ProductDetailOrder from "./ProductDetailOrder";
import { useParams } from "react-router-dom";

export default function ProductDetailForm() {
  const params = useParams();
  const productInfo = productData.filter((v) => v.id === params.id);
  console.log(productInfo);
  return (
    <Container>
      <OrderWrapper>
        <ImageWrapper>
          <img src={productInfo[0].productImg} alt="img" />
        </ImageWrapper>
        <ProductDetailOrder
          title={productInfo[0].title}
          price={productInfo[0].price}
          subTitle={productInfo[0].brand}
          option={productInfo[0].option}
        />
      </OrderWrapper>
      <Comments />
      <AdditionalInfo contentImg={productInfo[0].contentImg} />
    </Container>
  );
}

const Container = styled.section`
  max-width: 1280px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 80px;
`;

const ImageWrapper = styled.div`
  max-width: 620px;
  img {
    max-width: 620px;
    object-fit: cover;
  }
`;

const OrderWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 40px;
  border-bottom: 1px solid #d4d4d4;
  padding-bottom: 80px;
`;
