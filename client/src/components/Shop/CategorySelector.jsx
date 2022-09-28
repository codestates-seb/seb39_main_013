/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Link,
  NavLink,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import styled from "styled-components";
import { categoryList } from "../../constance";

export default function CategorySelector() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isClick, setIsClick] = useState("");
  const categoryArray = categoryList;

  const categoryClickHandler = (name) => {
    if (name === isClick) {
      setIsClick("");
    } else {
      setIsClick(name);
    }
  };

  // const location = useLocation();
  // console.log(location);
  const category = searchParams.get("category");
  const sub = searchParams.get("sub");
  const testParams = (a, b) => {
    setSearchParams({ category: a, sub: b });
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
                  {v.subCategory.map((value) => {
                    return (
                      <Link to={`?category=${v.mainCategory}`} key={value}>
                        {value}
                      </Link>
                    );
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
  font-size: 18px;
`;

const SubCategory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px 4px;
  color: black;

  a {
    opacity: 0.6;
    animation: 0.2s ease-in-out smoothAppear;
    font-size: 1rem;
    color: black;

    &:hover {
      opacity: 1;
    }
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
