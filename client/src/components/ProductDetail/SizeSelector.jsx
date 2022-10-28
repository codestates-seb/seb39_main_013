/* eslint-disable react/prop-types */
import React, { memo, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

export default memo(function SizeSelector(props) {
  const [selectItem, setSelectItem] = useState(props.size[0].size);
  useEffect(() => {
    props.setSize(selectItem);
  }, [selectItem]);

  const settings = {
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    infinite: false,
    centerMode: true,
  };

  const slideItemClickHandler = (value) => {
    setSelectItem(value);
  };

  return (
    <Container>
      <IoMdArrowDropleft />
      <SliderWrapper arrows={false} {...settings}>
        {props.size.map((v) => {
          return (
            <div key={v.productItemId}>
              <SlideItem
                selected={selectItem === v.size}
                onClick={() => slideItemClickHandler(v.size)}
              >
                {v.size}
              </SlideItem>
            </div>
          );
        })}
      </SliderWrapper>
      <IoMdArrowDropright />
    </Container>
  );
});

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 24px;
    height: 24px;
    fill: #49474c;
  }
`;

const SliderWrapper = styled(Slider)`
  width: 300px;

  .slick-arrow .slick-next {
    display: none;
  }

  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const SlideItem = styled.button`
  width: 50px;
  background-color: ${(props) => props.selected && "black"};
  border: none;
  background-color: transparent;
  font-size: 1rem;
  color: #49474c;

  ${(props) =>
    props.selected &&
    css`
      color: #2d7df4;
      font-size: 18px;
      font-weight: 700;
    `}
`;
