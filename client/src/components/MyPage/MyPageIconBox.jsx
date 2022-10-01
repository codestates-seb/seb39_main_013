import React from "react";
import styled from "styled-components";
import { FaHeart, FaRegCommentAlt, FaRegAddressCard } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiTruck } from "react-icons/fi";
import { BsQuestionOctagon } from "react-icons/bs";

export default function MyPageIconBox() {
  /**
   * @IconBox 중첩 라우팅처리
   */
  return (
    <Container>
      <IconBox>
        <li>
          <Icons to="/mypage/favorite">
            <FaHeart />
            <span>찜한상품</span>
          </Icons>
        </li>
        <li>
          <Icons to="/">
            <FiTruck />
            <span>구매내역</span>
          </Icons>
        </li>
        <li>
          <Icons to="/">
            <FaRegCommentAlt />
            <span>리뷰내역</span>
          </Icons>
        </li>
        <li>
          <Icons to="/">
            <BsQuestionOctagon />
            <span>FAQ</span>
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
`;

const IconBox = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  li {
    width: 100%;
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
