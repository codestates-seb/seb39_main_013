import React from "react";
import styled from "styled-components";
import { FaHeart, FaRegCommentAlt, FaRegAddressCard } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiTruck } from "react-icons/fi";
import { MdPayment } from "react-icons/md";

export default function MyPageIconBox() {
  /**
   * @IconBox 중첩 라우팅처리
   */
  return (
    <Container>
      <IconBox>
        <li>
          <Icons to="/mypage/favorite">
            <FaHeart fill="#ff3251" />
            <span>찜한상품</span>
          </Icons>
        </li>
        <li>
          <Icons to="/mypage/orders">
            <FiTruck />
            <span>주문내역</span>
          </Icons>
        </li>
        <li>
          <Icons to="/mypage/payment">
            <MdPayment />
            <span>결제내역</span>
          </Icons>
        </li>
        <li>
          <Icons to="/mypage/reviews">
            <FaRegCommentAlt />
            <span>리뷰내역</span>
          </Icons>
        </li>
        <li>
          <Icons to="/">
            <FaRegAddressCard />
            <span>주소록</span>
          </Icons>
        </li>
      </IconBox>
    </Container>
  );
}

const Container = styled.section`
  background-color: #f6f6f6;
  border-radius: 10px;
  margin-bottom: 32px;
`;

const IconBox = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  li {
    width: 100%;
    transition: 0.5s;
    &:hover {
      background: transparent;
      box-shadow: inset 300px 0 0 0 #87c2f5;
      color: #d8d8d8;
    }
  }
`;

const Icons = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: black;
  padding: 10px 0;

  svg {
    width: 24px;
    height: 24px;
  }

  span {
    font-size: 14px;
  }
`;
