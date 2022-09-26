/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styled from "styled-components";
import { dummyColor } from "../../dummyData";
import Button from "../Commons/Button";
import CheckBoxSelector from "./CheckBoxSelector";
import ColorSelector from "./ColorSelector";
import ImageSelector from "./ImageSelector";
import InputSelect from "./InputSelect";
import InputText from "./InputText";

export default function ProductRegisterForm() {
  const [inputs, setInputs] = useState({
    productname: "",
    brand: "",
    productPrice: "",
    category1: "",
    category2: "",
    productQuantity: "",
    color: "",
  });

  const inputChangeHandler = (e) => {
    console.log(e);
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  return (
    <Container>
      <InputWrapper>
        <InputText
          name={"productName"}
          label={"Product Name"}
          text={"Input Product Name"}
          require={true}
          mode={"title"}
          type={"text"}
          changeHandler={inputChangeHandler}
        />
        <InputSelect
          label={"Brand"}
          name={"brand"}
          text={"Select Brand"}
          require={true}
          changeHandler={inputChangeHandler}
        />
        <InputText
          name={"productPrice"}
          label={"Price"}
          text={"Input Price"}
          require={true}
          mode={"price"}
          type={"text"}
          changeHandler={inputChangeHandler}
        />
        <CategoryBox>
          <InputSelect
            name="category1"
            label={"Category1"}
            text={"Category1"}
            require={true}
            changeHandler={inputChangeHandler}
          />
          <InputSelect
            name="category2"
            label={"Category2"}
            text={"Category2"}
            require={true}
            changeHandler={inputChangeHandler}
          />
        </CategoryBox>
        <InputText
          name={"productQuantity"}
          label={"Quantity"}
          text={"Input Quantity"}
          require={true}
          mode={"title"}
          type={"text"}
          changeHandler={inputChangeHandler}
        />
        <ColorSelector
          require={true}
          colorList={dummyColor}
          name={"color"}
          changeHandler={inputChangeHandler}
        />
        <CheckBoxSelector />
        <ImageSelector buttonText={"Select Thumbnail"} label={"Thumbnail"} />
        <ImageSelector
          buttonText={"Select ContentImg"}
          label={"Content Image"}
        />
      </InputWrapper>
      <SubmitButtonWrapper>
        <Button>Register</Button>
      </SubmitButtonWrapper>
    </Container>
  );
}

const Container = styled.form`
  margin-top: 60px;
  margin-bottom: 60px;
`;

const InputWrapper = styled.div`
  max-width: 620px;
  min-width: 320px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 32px;
  margin-bottom: 48px;
`;

const CategoryBox = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  width: 100%;
  display: flex;
  gap: 40px;
  justify-content: space-between;
  align-items: center;
`;

const SubmitButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
