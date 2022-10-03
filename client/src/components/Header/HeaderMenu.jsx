/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { BsCart2 } from "react-icons/bs";
import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { persistor } from "../../redux/store";
import Cookies from "js-cookie";
import { tablet } from "../../utils/styleTheme";

const HeaderMenu = (props) => {
  const [isClick, setIsClick] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsClick(false);
  }, [location.pathname]);

  const logoutHandler = async () => {
    Cookies.remove("authorization");
    await persistor.purge();
  };

  const menuButtonHandler = () => {
    setIsClick((prev) => !prev);
  };

  return (
    <Container>
      <Wrapper hide={!isClick}>
        {props.login ? (
          <>
            <Link to="/cart">
              <BsCart2 />
              <HideText>Cart</HideText>
            </Link>
            <button onClick={async () => await logoutHandler()}>
              <AiOutlineLogout />
              <HideText>Logout</HideText>
            </button>
            <ProfileImage to="/mypage">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv-xDIYOuEy1r-AOVNQi807ovbQJln9JwyCw&usqp=CAU"
                alt="profileImg"
              />
              <HideText>Profile</HideText>
            </ProfileImage>
          </>
        ) : (
          <>
            <Link to="/cart">
              <BsCart2 />
              <HideText>Cart</HideText>
            </Link>
            <Link to="/login">
              <AiOutlineLogin />
              <HideText>Login</HideText>
            </Link>
          </>
        )}
      </Wrapper>
      <MenuButton onClick={menuButtonHandler}>test</MenuButton>
    </Container>
  );
};

const Container = styled.nav`
  flex: 1;

  @media ${tablet} {
    display: flex;
    justify-content: flex-end;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 24px;

  @media ${tablet} {
    width: 200px;
    ${(props) =>
      props.hide
        ? css`
            visibility: hidden;
            opacity: 0;
          `
        : css`
            display: flex;
            transition: opacity 0.2s ease-in-out;
          `};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    padding: 1rem 8px;
    background-color: #fdf6f0;
    position: absolute;
    border-radius: 10px;

    button {
      width: 100%;
      height: 40px;
      font-size: 1rem;
      padding: 8px 0;
      transition: 0.5s;
      border-radius: 8px;

      &:hover {
        background: transparent;
        box-shadow: inset 300px 0 0 0 #2d7df4;
        color: white;
      }
    }

    svg {
      display: none;
    }

    a {
      height: 40px;
      font-size: 1rem;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 8px 0;
      transition: 0.5s;
      border-radius: 8px;

      &:hover {
        background: transparent;
        box-shadow: inset 300px 0 0 0 #2d7df4;
        color: white;
      }
    }
  }

  svg {
    width: 24px;
    height: 24px;
  }

  a {
    color: #2d2d2d;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: transparent;
  }
`;

const ProfileImage = styled(Link)`
  width: 30px;
  height: 30px;
  overflow: hidden;

  img {
    border-radius: 50%;
    width: inherit;
    height: inherit;
    object-fit: cover;
  }

  @media ${tablet} {
    width: 100%;
    height: auto;

    img {
      display: none;
    }
  }
`;

const MenuButton = styled.button`
  display: none;

  @media ${tablet} {
    display: block;
  }
`;

const HideText = styled.span`
  display: none;
  @media ${tablet} {
    display: block;
  }
`;

export default HeaderMenu;
