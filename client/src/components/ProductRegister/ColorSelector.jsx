/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { memo, useCallback, useEffect, useState } from "react";
import styled, { css } from "styled-components";

export default function ColorSelector(props) {
  const [colors, setColors] = useState("");
  const [isChecked, setIsChecked] = useState(
    Array(props.colorList.length).fill(false)
  );

  useEffect(() => {
    props.changeHandler({ target: { name: props.name, value: colors } });
  }, [colors, isChecked]);

  const colorSelecthandler = useCallback(
    (value, index) => {
      if (value === colors) {
        setColors("");
        setIsChecked((prev) =>
          prev.map((v, i) => i === index && v === true && false)
        );
        return;
      }
      setColors(value);
      setIsChecked((prev) =>
        prev.map((v, i) => (i === index && v === false ? true : false))
      );
    },
    [colors, isChecked]
  );

  return (
    <Container require={props.require} fontSize={props?.fontSize}>
      <span>Color</span>
      <SelectorWrapper>
        {props.colorList.map((v, i) => {
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
    font-size: ${(props) => (props.fontSize ? props.fontSize : "1rem")};
    font-weight: 700;

    ${(props) =>
      props.require &&
      css`
        &::after {
          color: #ff5252;
          content: " *";
        }
      `}
  }

  input {
    display: none;
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
  border: ${(props) => props.checked && "3px solid #2D7DF4"};
  border-radius: ${(props) => (props.checked ? "2px" : "none")};
  transition: 0.04s;
  background-color: ${(props) => props.color || "#fff"};
`;
