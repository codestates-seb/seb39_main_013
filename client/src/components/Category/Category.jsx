import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { categoryImage } from "../../constance/bannerImage";
import { mobile, tablet } from "../../utils/styleTheme";

function Category() {
  return (
    <Conatainer>
      <div className="Category-Banner">
        {/* api가 나오면 적절히 페이지를 이동시켜줄 수 있어야한다. */}
        <CategoryCard row={1} to={"/shop"}>
          <div>Outer</div>
        </CategoryCard>
        <CategoryCard row={2} to={"/shop"}>
          <div>Shop</div>
        </CategoryCard>
        <CategoryCard row={3} to={"/shop"}>
          <div>Top</div>
        </CategoryCard>
        <CategoryCard row={4} to={"/shop"}>
          <div>Bottom</div>
        </CategoryCard>
        <CategoryCard row={5} to={"/shop"}>
          <div>Shoes</div>
        </CategoryCard>
        <CategoryCard row={6} to={"/shop"}>
          <div>Accessories</div>
        </CategoryCard>
      </div>
    </Conatainer>
  );
}

const Conatainer = styled.div`
  width: 100%;
  max-width: 1060px;
  height: 100%;
  max-height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 120px;

  .Category-Banner {
    width: 100%;
    height: 600px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-gap: 1rem;

    @media ${tablet} {
      grid-gap: 8px;
    }

    @media ${mobile} {
      display: flex;
      flex-direction: column;
    }
  }
`;

const CategoryCard = styled(Link)`
  font-size: 14px;
  font-weight: 500;
  color: #49474c;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-position: center;

  div {
    width: 100px;
    text-align: center;
    padding: 8px 0;
    margin-bottom: 8px;
    background-color: #eeeeee;
    opacity: 0.6;
    border-radius: 10px;
  }

  &:hover {
    div {
      opacity: 1;
    }
  }

  ${(props) =>
    props.row === 1 &&
    css`
      grid-row-start: 1;
      grid-row-end: 4;
      background-image: url(${categoryImage.outer});
      background-size: cover;
      background-repeat: no-repeat;
    `}

  ${(props) =>
    props.row === 2 &&
    css`
      grid-row-start: 1;
      grid-row-end: 3;
      border: 3px solid #ababab;
      background-image: url(${categoryImage.shop});
      background-size: cover;
      background-repeat: no-repeat;

      span {
        padding: 16px 0;
      }
    `}

  ${(props) =>
    props.row === 3 &&
    css`
      grid-row-start: 1;
      grid-row-end: 5;
      background-image: url(${categoryImage.top});
      background-size: cover;
      background-repeat: no-repeat;
    `}

    ${(props) =>
    props.row === 4 &&
    css`
      grid-row-start: 4;
      grid-row-end: 6;
      background-image: url(${categoryImage.bottom});
      background-size: cover;
      background-repeat: no-repeat;
    `}

    ${(props) =>
    props.row === 5 &&
    css`
      grid-row-start: 3;
      grid-row-end: 6;
      background-image: url(${categoryImage.shoes});
      background-size: cover;
      background-repeat: no-repeat;
    `}

    ${(props) =>
    props.row === 6 &&
    css`
      grid-row-start: 5;
      grid-row-end: 6;
      background-image: url(${categoryImage.bag});
      background-size: cover;
      background-repeat: no-repeat;
    `}
  

  &:hover {
    opacity: 1;
  }
`;

export default Category;
