/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";
import { HiOutlineX } from "react-icons/hi";
import { FaWonSign } from "react-icons/fa";
import Button from "../Commons/Button";

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
      <FormFooter>
        <button>
          <HiOutlineX />
          Clear Shopping Cart
        </button>
        <SubTotal>
          <span>Subtotal</span>
          <span>
            <FaWonSign />
            560000
          </span>
        </SubTotal>
      </FormFooter>
      <Button>ORDER NOW</Button>
    </Container>
  );
}

/**
 * flex로 정가운데 고정 시 max-width width 100%로 전체 공간 잡기
 */

const Container = styled.section`
  width: 100%;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin-top: 64px;
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

const FormFooter = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #d4d4d4;
  margin-bottom: 40px;

  button {
    display: flex;
    align-items: center;
    border: none;
    background-color: transparent;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

const SubTotal = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    font-size: 14px;
    font-weight: 600;
    color: #525252;

    &:last-child {
      font-size: 20px;
      font-weight: 600;
    }

    svg {
      width: 16px;
      height: 16px;
      margin-right: 4px;
    }
  }
`;
