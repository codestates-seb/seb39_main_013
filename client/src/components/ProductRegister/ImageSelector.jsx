/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import ImageUploader from "react-images-upload";

export default function ImageSelector(props) {
  return (
    <Container>
      <span>{props.label}</span>
      <InputImage
        imgExtension={[".jpg", ".gif", ".png", ".gif"]}
        maxFileSize={5242880}
        withPreview={true}
        buttonText={props.buttonText}
        label={"Max file size: 5mb"}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;

  span {
    font-size: 1rem;
    font-weight: 700;

    &::after {
      color: #ff5252;
      content: " *";
    }
  }
`;

const InputImage = styled(ImageUploader)`
  border: 1px dashed #c8c6c6;
  border-radius: 10px;
  background-color: #f1f1f1;
  div {
    background-color: #f1f1f1;
  }

  button {
    font-size: 12px;
  }
`;
