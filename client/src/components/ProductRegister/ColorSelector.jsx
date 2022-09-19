/* eslint-disable no-unused-vars */
import React, { useCallback, useState } from "react";
import styled, { css } from "styled-components";

const DummyColor = [
  "#B9B9B9",
  "#181818",
  "#FF8C8C",
  "#FF5050",
  "#FCDE77",
  "#80BC34",
  "#5898F9",
  "#3562FF",
  "#9A5CFF",
  "#FF85DD",
  "#7B5050",
  "#DC358F",
];

export default function ColorSelector() {
  const [colors, setColors] = useState([]);
  const [isChecked, setIsChecked] = useState(
    Array(DummyColor.length).fill(false)
  );
  console.log(isChecked);
  const colorSelecthandler = useCallback(
    (value, index) => {
      if (colors.includes(value)) {
        setColors(colors.filter((v) => v !== value));
        setIsChecked(
          isChecked.map((v, i) => (i === index && v === true ? (v = false) : v))
        );
        return;
      }
      setColors((prev) => [...prev, value]);
      setIsChecked(
        isChecked.map((v, i) => (i === index && v === false ? (v = true) : v))
      );
    },
    [colors, isChecked]
  );

  return (
    <Container>
      <span>Color</span>
      <SelectorWrapper>
        {DummyColor.map((v, i) => {
          return (
            <ColorBox
              onClick={() => colorSelecthandler(v, i)}
              color={v}
              checked={isChecked[i]}
              key={v}
            />
          );
        })}
      </SelectorWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  span {
    font-size: 1rem;
    font-weight: 700;

    &::after {
      color: #ff5252;
      content: " *";
    }
  }
`;

const SelectorWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const ColorBox = styled.div`
  width: 18px;
  height: 18px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border: ${(props) => (props.checked ? "3px solid #2D7DF4" : "none")};
  border-radius: ${(props) => (props.checked ? "2px" : "none")};
  transition: 0.04s;
  background-color: ${(props) => props.color || "#fff"};
`;