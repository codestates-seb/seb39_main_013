/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";

const dummyData = [
  {
    id: "1",
    img: "https://kream-phinf.pstatic.net/MjAyMjA2MTVfNjUg/MDAxNjU1MjgxMTg3MDQ3.yu9lhOD2ymol3F34Ou3Bkxex2FF3WfVzxKc8HgkNdjUg.BHhRmo3Vn5juLe9RnOVecap5GUZ3PK0hLme4AzRJ4BMg.JPEG/a_23c64f2c02ec423db4ec0a9f67960d3d.jpg?type=l_webp",
    title: "Jordan 1 Low Golf Sport Royal",
    brand: "Jordan",
    price: 350000,
    option: [
      {
        id: "1",
        color: "black",
        size: "245",
        quantity: 1,
      },
      {
        id: "2",
        color: "red",
        size: "260",
        quantity: 1,
      },
    ],
  },
  {
    id: "2",
    img: "https://kream-phinf.pstatic.net/MjAyMjAyMDhfMjc3/MDAxNjQ0MzAzNjE2MzA1.S88TxtpuY3AYewuLRZLofVyg4Q6kaMoNX8xa-4OParUg.2eqR7LCl0e5XI5BUmXoc8FzdOarswGr8w4-wJw3ahC0g.PNG/a_ac3651adb7f34b83aba3e6b2a0e43ea7.png?type=m_webp",
    title: "Stussy Basic Stussy Hoodie Black 2022",
    brand: "Stussy",
    price: 238000,
    option: [
      {
        id: "1",
        color: "gray",
        size: "Large",
        quantity: 2,
      },
    ],
  },
];

export default function CartForm() {
  return (
    <Container>
      <FormHeader>
        <MenuBox>PRODUCT NAME</MenuBox>
        <MenuBox>OPTION</MenuBox>
        <MenuBox>TOTAL</MenuBox>
      </FormHeader>
      <FormBody>
        {dummyData.map((v) => {
          return (
            <CartItem
              key={v.id}
              itemImg={v.img}
              brandName={v.brand}
              itemTitle={v.title}
              option={v.option}
              price={v.price}
            />
          );
        })}
      </FormBody>
    </Container>
  );
}

const Container = styled.section`
  width: 1280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
`;

const FormBody = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
`;
