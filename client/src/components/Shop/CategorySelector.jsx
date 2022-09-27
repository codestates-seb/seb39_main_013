/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { categoryList } from "../../constance";

export default function CategorySelector() {
  const [isClick, setIsClick] = useState("");
  const categoryArray = categoryList;

  const categoryClickHandler = (name) => {
    if (name === isClick) {
      setIsClick("");
    } else {
      setIsClick(name);
    }
  };

  return (
    <Container>
      <p>Category</p>
      <CategoryWrapper>
        {categoryArray.map((v) => {
          return (
            <li key={v.id} onClick={() => categoryClickHandler(v.mainCategory)}>
              <MainCategory>{v.mainCategory}</MainCategory>
              {v.mainCategory === isClick && (
                <SubCategory>
                  {v.subCategory.map((value, idx) => {
                    return <div key={idx}>{value}</div>;
                  })}
                </SubCategory>
              )}
            </li>
          );
        })}
      </CategoryWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  p {
    font-size: 20px;
    font-weight: 800;
  }
`;

const CategoryWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const MainCategory = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1rem;
`;

const SubCategory = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px 4px;

  div {
    animation: 0.2s ease-in-out smoothAppear;
    font-size: 14px;
  }

  @keyframes smoothAppear {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
