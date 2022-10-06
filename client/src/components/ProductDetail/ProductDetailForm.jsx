/* eslint-disable react/prop-types */
import React, { memo } from "react";
import styled from "styled-components";
import useGetProductDetailInfo from "../../hooks/useGetProductDetailInfo";
import Comments from "../Comment/Comments";
import DetailSkeleton from "./DetailSkeleton";
import ProductDetailOrder from "./ProductDetailOrder";

export default memo(function ProductDetailForm(props) {
  const getProductDetailInfo = useGetProductDetailInfo({
    name: props.dataInfo.name,
  });

  if (getProductDetailInfo.isLoading) {
    return <DetailSkeleton />;
  }

  return (
    <Container>
      <OrderWrapper>
        <ImageWrapper>
          <img src={props.dataInfo.thumb_images[0]} alt="img" />
        </ImageWrapper>
        <ProductDetailOrder
          title={props.dataInfo.name}
          price={props.dataInfo.price}
          subTitle={props.dataInfo.brand_name}
          color={props.dataInfo.color}
          size={props.dataInfo.size}
          maxQuantity={props.dataInfo.stock}
          data={props.dataInfo}
          sizeList={getProductDetailInfo.data}
        />
      </OrderWrapper>

      <Comments
        productId={props.dataInfo.product_id}
        productName={props.dataInfo.name}
        contentImg={props.dataInfo.content_images}
      />
    </Container>
  );
});

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
  width: 100%;
  max-width: 620px;
  img {
    width: 100%;
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

  @media screen and (max-width: 1280px) {
    place-items: center;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
  }
`;
