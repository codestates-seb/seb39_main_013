/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function ProfileCard(props) {
  return (
    <Container>
      <div>
        <ImageWrapper>
          <img src={props.info.profileImg} alt="profileImg" />
        </ImageWrapper>
        <ProfileInfo>
          <span>{props.info.name}</span>
          <Link to="edit">프로필 수정</Link>
        </ProfileInfo>
      </div>
      <span>{props.info.role}</span>
    </Container>
  );
}

const Container = styled.section`
  border: 1px solid #d8d8d8;
  border-radius: 10px;
  padding: 30px 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  > div {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  > span {
    font-size: 20px;
    font-weight: 700;
  }
`;

const ImageWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: inherit;
    height: inherit;
    object-fit: cover;
  }
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  span {
    font-size: 20px;
    font-weight: 700;
  }

  a {
    border: 1px solid #b4b4b4;
    border-radius: 8px;
    background-color: transparent;
    padding: 8px 1rem;
    color: black;
  }
`;
