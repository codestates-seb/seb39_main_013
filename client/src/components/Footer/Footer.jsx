/* eslint-disable no-undef */
import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { AiOutlineGithub } from "react-icons/ai";

function Footer() {
  return (
    <Container>
      <div className="Footer-Left">
        <Link to="/">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/logo_demo02_white.svg`}
            alt="logo"
          />
        </Link>
      </div>
      <div className="Footer-Middle">
        <a href="https://github.com/codestates-seb/seb39_main_013">
          project repository
        </a>
      </div>
      <div className="Footer-Right">
        <GitLinkBox>
          <li>
            <a
              href="https://github.com/subo-9439"
              target={"_blank"}
              rel="noreferrer"
            >
              <AiOutlineGithub />
              <span>김수보</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Blossssom"
              target={"_blank"}
              rel="noreferrer"
            >
              <AiOutlineGithub />
              <span>이재형</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/dormirMais"
              target={"_blank"}
              rel="noreferrer"
            >
              <AiOutlineGithub />
              <span>장순학</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/goyois"
              target={"_blank"}
              rel="noreferrer"
            >
              <AiOutlineGithub />
              <span>김덕우</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/ThreeLeafClover9"
              target={"_blank"}
              rel="noreferrer"
            >
              <AiOutlineGithub />
              <span>지영민</span>
            </a>
          </li>
        </GitLinkBox>
      </div>
    </Container>
  );
}

const Container = styled.footer`
  height: 80px;
  width: 100%;
  bottom: 0;
  position: absolute;
  background-color: #4b4b4b;
  display: flex;
  padding: 0 64px;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .Footer-Left {
    a {
      color: white;
    }

    img {
      width: 120px;
    }
  }

  .Footer-Middle {
    a {
      text-decoration: none;
      color: white;
    }
  }

  .Footer-Right {
    button {
      border: 2px solid white;
      background-color: #565656;
      color: white;
      padding: 5px 7px;
      margin: 0 10px;
      font-size: 18px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      cursor: pointer;
    }
  }
`;

const GitLinkBox = styled.ul`
  display: flex;
  align-items: center;
  gap: 8px;

  a {
    color: white;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 4px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

export default Footer;
