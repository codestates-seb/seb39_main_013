/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { memo } from "react";
import styled from "styled-components";
import ImageUploader from "react-images-upload";
import { useMutation } from "react-query";
import { imageRegisterFn } from "../../api";

export default memo(function ImageSelector(props) {
  const { mutate, data, isSuccess, isLoading } = useMutation((value) =>
    imageRegisterFn(value)
  );
  const formData = new FormData();

  const imageChangeHandler = (e) => {
    formData.append("data", e[0]);
    console.log("img change", e[0], typeof e);
  };

  if (isSuccess) {
    console.log(data);
    props.changeHandler([data.data]);
  }

  return (
    <Container>
      <span>{props.label}</span>
      <InputImage
        imgExtension={[".jpg", ".gif", ".png", ".gif", ".webp", ".jpeg"]}
        maxFileSize={5242880}
        withPreview={true}
        buttonText={props.buttonText}
        label={"Max file size: 5mb"}
        onChange={(e) => imageChangeHandler(e)}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          mutate(formData);
        }}
      >
        test
      </button>
    </Container>
  );
});

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
