import React, { useState } from "react";
import styled from "styled-components";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

export default function MainCarousel() {
  // eslint-disable-next-line no-unused-vars
  const [imgList, setImgList] = useState([
    "https://active.ridibooks.com/ridibooks_banner/1659279787605_MjIwNzA3.jpg",
    "https://active.ridibooks.com/ridibooks_banner/1659107102749_MjIwNzIz.jpg",
    "https://active.ridibooks.com/ridibooks_banner/1658807205795_MjIwNzEx.jpg",
    "https://active.ridibooks.com/ridibooks_banner/1658707051124_MjIwNzE5.jpg",
    "https://active.ridibooks.com/ridibooks_banner/1658416086708_MjIwNzA0.jpg",
    "https://active.ridibooks.com/ridibooks_banner/1658455774270_MjIwNzA2.jpg",
    "https://active.ridibooks.com/ridibooks_banner/1658899593633_MjIwNzI2.jpg",
  ]);
  const [imgNum, setImgNum] = useState(0);

  const slideRightHandle = () => {
    if (imgNum === imgList.length - 1) {
      setImgNum(0);
    } else {
      setImgNum((prev) => prev + 1);
    }
  };

  const slideLeftHandle = () => {
    if (imgNum === 0) {
      setImgNum(imgList.length - 1);
    } else {
      setImgNum((prev) => prev - 1);
    }
  };

  return (
    <div>
      <Container>
        {imgList.map((v, i) => {
          return (
            <Slider
              key={i}
              style={
                i === imgNum
                  ? { flexBasis: "1200px", flexGrow: 1 }
                  : i === imgNum + 1 || i === imgNum + 2
                  ? { flexBasis: "80px" }
                  : { flexBasis: "0px", margin: "0px", padding: "0px" }
              }
            >
              <img src={v} alt="banner-img" />
            </Slider>
          );
        })}
        <CarouselArrow prev onClick={slideLeftHandle}>
          <MdArrowBackIosNew />
        </CarouselArrow>
        <CarouselArrow next onClick={slideRightHandle}>
          <MdArrowForwardIos />
        </CarouselArrow>
      </Container>
    </div>
  );
}

const Container = styled.section`
  max-width: 1280px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 56px;

  @keyframes slide {
    from {
      flex-basis: 1000;
    }

    to {
      flex-basis: 100px;
    }
  }
`;

const Slider = styled.div`
  margin: 0 4px;
  width: 100%;
  height: 480px;
  transition: 0.5s;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`;

const CarouselArrow = styled.button`
  border: none;
  background: rgba(0, 0, 0, 0.1);
  width: 48px;
  height: 48px;
  position: absolute;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }

  svg {
    width: 32px;
    height: 32px;

    fill: white;
  }

  ${(props) => (props.prev ? "left: 10px" : "right: 10px")}
`;
