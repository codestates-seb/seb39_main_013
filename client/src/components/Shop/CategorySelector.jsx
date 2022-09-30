/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { categoryList } from "../../constance";

export default function CategorySelector(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isClick, setIsClick] = useState("");
  const categoryArray = categoryList;

  useEffect(() => {
    props.changeHandler({ target: { name: "majorClass", value: isClick } });
  }, [isClick]);

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
              <MainCategory to={`category=${v.mainCategory}`}>
                {v.mainCategory}
              </MainCategory>
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
  font-size: 18px;
  color: black;
`;

// const SubCategory = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 8px;
//   padding: 12px 4px;
//   color: black;

//   a {
//     opacity: 0.6;
//     animation: 0.2s ease-in-out smoothAppear;
//     font-size: 1rem;
//     color: black;

//     &:hover {
//       opacity: 1;
//     }
//   }

//   @keyframes smoothAppear {
//     0% {
//       opacity: 0;
//       transform: translateY(-10px);
//     }
//     100% {
//       opacity: 1;
//       transform: translateY(0);
//     }
//   }
// `;
