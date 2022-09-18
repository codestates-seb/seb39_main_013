import React, { useState } from "react";
import classes from "./Slider.module.css";

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
      <section className={classes.slider_wrapper}>
        {imgList.map((v, i) => {
          return (
            <div
              key={i}
              className={`${classes.banner_slide}`}
              style={
                i === imgNum
                  ? { flexBasis: "1000px", flexGrow: 1 }
                  : i === imgNum + 1 || i === imgNum + 2
                  ? { flexBasis: "100px" }
                  : { flexBasis: "0px", margin: "0px", padding: "0px" }
              }
            >
              <img src={v} alt="banner-img" />
            </div>
          );
        })}
      </section>
      <button onClick={slideLeftHandle}>{"<"}</button>
      <button onClick={slideRightHandle}>{">"}</button>
    </div>
  );
}
