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
            <li key={v.id}>
              <MainCategory
                onClick={() => categoryClickHandler(v.mainCategory)}
              >
                {v.mainCategory}
              </MainCategory>
              <SubCategory>
                {v.mainCategory === isClick &&
                  v.subCategory.map((value) => {
                    return <div>{value}</div>;
                  })}
              </SubCategory>
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
  gap: 8px;
`;

const MainCategory = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1rem;
`;

const SubCategory = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 4px;
  /* transform: translateY(-20px); */

  div {
    font-size: 14px;
  }

  @keyframes smoothAppear {
    from {
      opacity: 0;
      transform: translateY(-5%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
