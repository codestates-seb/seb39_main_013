/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styled from "styled-components";
import { FaHeart, FaRegCommentAlt, FaRegAddressCard } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiTruck } from "react-icons/fi";
import { MdPayment } from "react-icons/md";
import { mypageMenuList } from "../../constance";

export default function MyPageIconBox() {
  const [isClick, setIsClick] = useState(1);
  const icons = {
    1: <FaHeart fill="#ff3251" />,
    2: <FiTruck />,
    3: <MdPayment />,
    4: <FaRegCommentAlt />,
  };
  const menuList = mypageMenuList;
  return (
    <Container>
      <IconBox>
        {menuList.map((v, i) => {
          return (
            <WrapperList
              key={v.id}
              active={v.id === isClick ? true : false}
              onClick={() => setIsClick(v.id)}
            >
              <Icons to={v.link}>
                {icons[i + 1]}
                <span>{v.text}</span>
              </Icons>
            </WrapperList>
          );
        })}
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
`;

const WrapperList = styled.li`
  width: 100%;
  transition: 0.5s;
  &:hover {
    background: transparent;
    box-shadow: inset 300px 0 0 0 #87c2f5;
    color: #d8d8d8;
  }

  background-color: ${(props) => (props.active ? "#87c2f5" : "transparent")};
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
