/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { persistor } from "../../redux/store";
import Cookies from "js-cookie";
import { tablet } from "../../utils/styleTheme";
import { useSelector } from "react-redux";

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
            <Link to="/cart" className="header__cart--items">
              <HideText>Cart</HideText>
            </Link>
            <button
              className="header__link-login"
              onClick={async () => await logoutHandler()}
            >
              <HideText>Logout</HideText>
            </button>
            <ProfileImage to="/mypage">
              <img src={props.info.profileImg} alt="profileImg" />
              <HideText>Profile</HideText>
            </ProfileImage>
          </>
        ) : (
          <>
            <Link to="/cart" className="header__cart--items">
              <HideText>Cart</HideText>
            </Link>
            <Link to="/login" className="header__link-login">
              <HideText>Login</HideText>
            </Link>
          </>
        )}
      </Wrapper>
      <MenuButton onClick={menuButtonHandler}>
        {isClick ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </MenuButton>
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
            box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px,
              rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px,
              rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
          `};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    padding: 1rem 8px;
    background-color: #f4f5f7;
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

        span {
          color: white !important;
        }
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
      color: black;
      margin: 0;

      &:hover {
        background: transparent;
        box-shadow: inset 300px 0 0 0 #2d7df4;

        span {
          color: white !important;
        }
      }
    }
    .header__link-login {
      border: none !important;
      border-radius: 8px !important;
    }
  }

  svg {
    width: 24px;
    height: 24px;
  }

  a {
    color: #2d2d2d;
    padding: 10px 16px;
    font-size: 1rem;
  }

  .header__link-login {
    border: 3px solid #c7c7c7;
    border-radius: 30px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: transparent;
    padding: 10px 24px;
    font-size: 1rem;
  }

  /* .header__cart--items {
    display: flex;
    align-items: center;
    gap: 8px;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #ff3251;
      color: white;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      font-size: 14px;
    }
  } */
`;

const ProfileImage = styled(Link)`
  width: 34px;
  height: 34px;
  overflow: hidden;
  padding: 0 !important;
  margin-left: 8px;

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
  border: none;
  background-color: transparent;

  @media ${tablet} {
    display: block;
  }
`;

const HideText = styled.span`
  font-weight: 600;
  color: #49474c;
  @media ${tablet} {
    display: block;
  }
`;

export default HeaderMenu;
