import React, { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const dummyData = {
  title: "",
  price: "",
  option: {
    size: [245, 250, 255, 260, 265, 270, 275],
    color: "",
  },
  quantity: 9,
};

export default function SizeSelector() {
  const [selectItem, setSelectItem] = useState(0);

  const settings = {
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    infinite: false,
    centerMode: true,
    centerPadding: "10px",
    className: "center",
  };

  const slideItemClickHandler = (value) => {
    setSelectItem(value);
  };
  return (
    <Container>
      <SliderWrapper arrows={false} {...settings}>
        {dummyData.option.size.map((v, i) => {
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

const Container = styled.article``;

const SliderWrapper = styled(Slider)`
  width: 300px;

  .slick-arrow .slick-next {
    display: none;
  }
`;

const SlideItem = styled.div`
  width: 50px;
  background-color: ${(props) => props.selected && "black"};
`;
