import React from "react";
import useGetOrderList from "../../hooks/useGetOrderList";
import Loading from "../Commons/Loading";
import styled from "styled-components";
import OrderItem from "./OrderItem";

export default function MyOrderList() {
  const getOrderList = useGetOrderList();

  if (getOrderList.isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <FormHeader>
        <MenuBox>PRODUCT NAME</MenuBox>
        <MenuBox>OPTION</MenuBox>
        <MenuBox>STATUS</MenuBox>
      </FormHeader>
      <FormBody>
        {getOrderList?.data.order_response_dto.map((v) => {
          return (
            <OrderItem
              key={v.order_id}
              orderStatus={v.order_status}
              products={v.order_products}
            />
          );
        })}
      </FormBody>
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
  }

  &:last-child {
    flex: 0.8;
  }
`;

const FormBody = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
`;
