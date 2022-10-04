//로컬스토리지에서 리뷰들을 가져온다음에. 본인에게 맞는 아이만 가져온다. 조건은 isLogin이다.
/* eslint-disable */
import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import ReviewComment from "../Comment/ReviewComment";
import ReviewItem from "./ReviewItem";

function MyReviews() {
  const userInfo = useSelector((state) => state.user);

  const userName = userInfo.name;
  const userEmail = userInfo.email;

  let reviews = [];
  if (localStorage.getItem("dataReviews")) reviews = JSON.parse(localStorage.getItem("dataReviews")).filter((review) => review.reviewEmail === userEmail);

  console.log("리뷰스", reviews.length);

  return (
    <Container>
      <FormHeader>
        <MenuBox>PRODUCT NAME</MenuBox>
        <MenuBox>REVIEW</MenuBox>
      </FormHeader>
      <FormBody>{reviews.length !== 0 ? reviews.map((review) => <ReviewItem key={review.reviewId} review={review} />) : <div>리뷰없음</div>}</FormBody>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

const FormHeader = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem 0;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #d4d4d4;
  font-size: 14px;
`;

const MenuBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:nth-child(1) {
    flex: 2;
    justify-content: center;
  }
  &:nth-child(2) {
    flex: 8;
    justify-content: center;
  }
`;

const FormBody = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;

  .reviewBox {
    height: 300px;
    width: 100%;
    border: 2px solid blue;
  }
`;

export default MyReviews;
