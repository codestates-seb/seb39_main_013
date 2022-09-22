/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import Category from "../components/Category/Category";
import MainBanner from "../components/Main/MainBanner";
import MainItems from "../components/MainItems/MainItems";
import MainItemsCategory from "../components/MainItems/MainItemsCategory";

const dummyData = [
  {
    id: "1",
    favorite: true,
    title:
      "Stone Island 31303 Stretch Cotton Tela Paracadute Cargo Pants Black - 22SS",
    brand: "Stone Island",
    price: "484,000",
    productImg:
      "https://kream-phinf.pstatic.net/MjAyMTEyMDlfMjkz/MDAxNjM5MDQ2NjMyNjEy.qcvpzLmjwn6gHC1uO1aSZjVxnwwEeJZpDeAWJHmY14Yg.h3DmoeKWJf-5YfhR7xt7eEA4vAX8fC7J4uI2zj9Twaog.PNG/a_2728e8e9187d4b378493443ef4b2adfd.png?type=m_webp",
  },
  {
    id: "2",
    favorite: false,
    title: "IAB Studio Hoodie Oatmeal Burgundy",
    brand: "IAB Studio",
    price: "326,000",
    productImg:
      "https://kream-phinf.pstatic.net/MjAyMjAzMDRfMTE5/MDAxNjQ2Mzg3MjU1NTk1.8gzWHRycVRzfRoN6U_WSjCxlqG9sq807zcLh-nIwar4g.poqPXGQR2NorycKMg2XdnnblZk60oM0Q7OJxe-CXKcUg.JPEG/a_12998286fa1a4d62b6e49603f90769ef.jpg?type=m_webp",
  },
  {
    id: "3",
    favorite: false,
    title: "Stussy Curly S Sweater Natural",
    brand: "Stussy",
    price: "294,000",
    productImg:
      "https://kream-phinf.pstatic.net/MjAyMjA4MTlfMTcx/MDAxNjYwODc2NjQyOTIz.wKE1fIqlgBc5q5jF1uAoFeBhb0chNLbe85GtfGg5Pasg.169g4gN4-PQwtlBKjVCv9-TFzo6dnpDhPSAZJKH-erAg.JPEG/a_579ddd71d2de43e3b3f16d33452cd0fc.jpg?type=m_webp",
  },
  {
    id: "4",
    favorite: true,
    title: "Balenciaga Padded Japanese Denim Jacket Indigo",
    brand: "Balenciaga",
    price: "2,800,000",
    productImg:
      "https://kream-phinf.pstatic.net/MjAyMjAyMTFfMTM1/MDAxNjQ0NTYzODgyMzY2.XJzTk_golvdGvbabPmP7R3NCzxre2Sdr4sOEQhBtjj0g.IvqmSn97cBGGtt_f5v103i180SBZYNLT_QLWQQsYcjAg.PNG/a_b93dce8e4dc34755836f8eef2ea0b993.png?type=m_webp",
  },
  {
    id: "5",
    favorite: false,
    title: "Ader Error x Zara Oversized Shirt Sky Blue",
    brand: "Ader Error",
    price: "133,000",
    productImg:
      "https://kream-phinf.pstatic.net/MjAyMTEyMjFfMTIx/MDAxNjQwMDY0MzU5OTM3.lZhX-Ra4wFsZHMFgQB1svBwhY5Lwe53kmmQOcnTE9bYg.Of6BSKHmc9hG_TOO0h3VRpeUFV8yapqaAKr9rDwjfKEg.PNG/a_a7fe49aa26b24d22a3d556ddd9cb4698.png?type=m_webp",
  },
];

export default function MainPage() {
  return (
    <Container>
      <MainBanner />
      <Category />
      <MainItemsCategory />
      <MainItems productList={dummyData} />
    </Container>
  );
}

const Container = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
