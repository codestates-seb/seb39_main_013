import React from "react";
import styled from "styled-components";
import InputSelect from "./InputSelect";
import InputText from "./InputText";

export default function ProductRegisterForm() {
  return (
    <Container>
      <InputText
        name={"ProductName"}
        label={"Product Name"}
        text={"Input Product Name"}
        require={true}
      />
      <InputSelect label={"Brand"} text={"Select Brand"} require={true} />
    </Container>
  );
}

const Container = styled.form`
  max-width: 620px;
  display: flex;
`;
