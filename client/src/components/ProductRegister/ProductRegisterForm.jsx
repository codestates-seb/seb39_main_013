import React from "react";
import styled from "styled-components";
import Button from "../Commons/Button";
import CheckBoxSelector from "./CheckBoxSelector";
import ColorSelector from "./ColorSelector";
import ImageSelector from "./ImageSelector";
import InputSelect from "./InputSelect";
import InputText from "./InputText";

export default function ProductRegisterForm() {
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
        />
        <InputSelect label={"Brand"} text={"Select Brand"} require={true} />
        <InputText
          name={"productPrice"}
          label={"Price"}
          text={"Input Price"}
          require={true}
          mode={"price"}
          type={"text"}
        />
        <CategoryBox>
          <InputSelect label={"Category1"} text={"Category1"} require={true} />
          <InputSelect label={"Category2"} text={"Category2"} require={true} />
        </CategoryBox>
        <InputText
          name={"Quantity"}
          label={"Quantity"}
          text={"Input Quantity"}
          require={true}
          mode={"title"}
          type={"text"}
        />
        <ColorSelector />
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
`;

const InputWrapper = styled.div`
  width: 620px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 32px;
  margin-bottom: 48px;
`;

const CategoryBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
`;

const SubmitButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
