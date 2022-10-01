/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import { BsCart2 } from "react-icons/bs";
import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import { Link } from "react-router-dom";
import { persistor } from "../../redux/store";
import Cookies from "js-cookie";

const HeaderMenu = (props) => {
  const logoutHandler = async () => {
    Cookies.remove("authorization");
    await persistor.purge();
  };

  return (
    <Container>
      <Wrapper>
        {props.login ? (
          <>
            <Link to="/cart">
              <BsCart2 />
            </Link>
            <button onClick={async () => await logoutHandler()}>
              <AiOutlineLogout />
            </button>
            <ProfileImage to="/mypage">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv-xDIYOuEy1r-AOVNQi807ovbQJln9JwyCw&usqp=CAU"
                alt="profileImg"
              />
            </ProfileImage>
          </>
        ) : (
          <>
            <Link to="/cart">
              <BsCart2 />
            </Link>
            <Link to="/login">
              <AiOutlineLogin />
            </Link>
          </>
        )}
      </Wrapper>
    </Container>
  );
};

const Container = styled.nav`
  flex: 1;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 32px;

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
`;

export default HeaderMenu;
