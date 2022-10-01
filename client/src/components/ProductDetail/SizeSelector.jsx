/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

export default function SizeSelector(props) {
  const [selectItem, setSelectItem] = useState(props.size[0]);

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
      <SliderWrapper arrows={false} {...settings}>
        {props.size.map((v, i) => {
          return (
            <div key={i}>
              <SlideItem
                selected={selectItem === v}
                onClick={() => slideItemClickHandler(v)}
              >
                {v}
              </SlideItem>
            </div>
          );
        })}
      </SliderWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SliderWrapper = styled(Slider)`
  width: 300px;

  .slick-arrow .slick-next {
    display: none;
  }
`;

const SlideItem = styled.button`
  width: 50px;
  background-color: ${(props) => props.selected && "black"};
  border: none;
  background-color: transparent;

  ${(props) =>
    props.selected &&
    css`
      color: #2d7df4;
      font-size: 1rem;
      font-weight: 700;
    `}
`;
