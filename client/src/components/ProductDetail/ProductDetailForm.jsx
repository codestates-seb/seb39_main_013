/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import Comments from "../Comment/Comments";
import AdditionalInfo from "./AdditionalInfo";
import ProductDetailOrder from "./ProductDetailOrder";

const dummyData = {
  title: "Nike Dunk High Retro Championship White",
  subTitle: "나이키 덩크 하이 레트로 챔피언쉽 화이트",
  price: "223000",
  image: "https://kream-phinf.pstatic.net/MjAyMjA2MTVfNjUg/MDAxNjU1MjgxMTg3MDQ3.yu9lhOD2ymol3F34Ou3Bkxex2FF3WfVzxKc8HgkNdjUg.BHhRmo3Vn5juLe9RnOVecap5GUZ3PK0hLme4AzRJ4BMg.JPEG/a_23c64f2c02ec423db4ec0a9f67960d3d.jpg?type=l_webp",
  option: {
    size: [245, 250, 255, 260, 265, 270, 275],
    color: "#5898F9",
  },
  contentImg: ["https://th3point.speedgabia.com/fluke/2022FW/FLT/flt709-1-1.jpg", "https://th3point.speedgabia.com/fluke/2022FW/FLT/flt709-1-2-m.jpg"],
  quantity: 9,
};

export default function ProductDetailForm() {
  return (
    <Container>
      <OrderWrapper>
        <ImageWrapper>
          <img src={dummyData.image} alt="img" />
        </ImageWrapper>
        <ProductDetailOrder title={dummyData.title} price={dummyData.price} subTitle={dummyData.subTitle} option={dummyData.option} />
      </OrderWrapper>
      <Comments />
      <AdditionalInfo contentImg={dummyData.contentImg} />
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
