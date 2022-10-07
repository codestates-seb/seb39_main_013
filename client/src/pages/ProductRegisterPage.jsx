import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ProductRegisterForm from "../components/ProductRegister/ProductRegisterForm";

export default function ProductRegisterPage() {
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.user);

  useEffect(() => {
    if (userInfo.role !== "Admin" || !userInfo.role) {
      navigate("/");
    }
  }, []);

  return (
    <Container>
      <ProductRegisterForm />
    </Container>
  );
}

const Container = styled.article`
  display: flex;
  justify-content: center;
`;
