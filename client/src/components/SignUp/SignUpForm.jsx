/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SignInput from "../Commons/SignInput";
import SignButton from "../Commons/SignButton";
import { Link, Navigate } from "react-router-dom";
import useSignUpMutation from "../../hooks/useSignUpMutation";
import { useDaumPostcodePopup } from "react-daum-postcode";
import {
  emailValidation,
  nameValidation,
  passwordValidation,
  phoneValidation,
} from "../../utils/validation";

export default function SignUpForm() {
  const [isValid, setIsValid] = useState(false);
  const [inputValid, setInputValid] = useState(false);
  const [address, setAddress] = useState("");
  const [postCode, setPostCode] = useState("");
  const [signUpValue, setSignUpValue] = useState({
    email: "",
    name: "",
    password: "",
    phone: "",
  });

  useEffect(() => {
    let valid = true;
    for (let i in signUpValue) {
      if (!signUpValue[i]) {
        valid = false;
        break;
      }
    }
    if (!valid || !address || !postCode || !inputValid) {
      setIsValid(false);
    } else if (valid && address && postCode && inputValid) {
      setIsValid(true);
    }
  }, [signUpValue, isValid, address, postCode, inputValid]);

  const open = useDaumPostcodePopup();

  const addressPostHandler = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }

      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    setAddress(fullAddress);
    setPostCode(data.zonecode);
  };

  const postCodeHandler = (e) => {
    e.preventDefault();
    open({ onComplete: addressPostHandler });
  };

  const signUpAction = useSignUpMutation({
    ...signUpValue,
    homeAddress: address,
    zipcode: postCode,
  });

  const inputChangeHandler = (e) => {
    setSignUpValue({ ...signUpValue, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    signUpAction.mutate();
  };

  if (signUpAction.isSuccess) {
    return <Navigate to={"/login"} replace />;
  }

  return (
    <Container>
      <SignInput
        label={"Email"}
        text={"Input your Email"}
        type={"email"}
        name={"email"}
        changeHandler={inputChangeHandler}
        onBlur={emailValidation}
        value={signUpValue.email}
        errorMassage={"이메일 형식을 지켜주세요."}
        setValid={setInputValid}
      />
      <SignInput
        label={"Name"}
        text={"Input your Name"}
        type={"text"}
        name={"name"}
        changeHandler={inputChangeHandler}
        onBlur={nameValidation}
        value={signUpValue.name}
        errorMassage={"이름을 입력해주세요."}
        setValid={setInputValid}
      />
      <SignInput
        label={"Phone"}
        text={"Input your PhoneNumber"}
        type={"text"}
        name={"phone"}
        changeHandler={inputChangeHandler}
        onBlur={phoneValidation}
        value={signUpValue.phone}
        errorMassage={"전화번호 형식을 지켜주세요."}
        setValid={setInputValid}
      />
      <SignInput
        label={"Password"}
        text={"Input Password for Signup"}
        type={"password"}
        name={"password"}
        changeHandler={inputChangeHandler}
        onBlur={passwordValidation}
        value={signUpValue.password}
        errorMassage={"비밀번호는 6자리 이상을 입력해주세요."}
        setValid={setInputValid}
      />

      {address && postCode && (
        <>
          <AddressInputWrapper>
            <label htmlFor="Address">Address</label>
            <div>
              <input
                value={address}
                type={"text"}
                disabled
                placeholder="input address"
              />
            </div>
          </AddressInputWrapper>

          <AddressInputWrapper>
            <label htmlFor="Post Code">Postcode</label>
            <div>
              <input
                value={postCode}
                type={"text"}
                disabled
                placeholder="input PostCode"
              />
            </div>
          </AddressInputWrapper>
        </>
      )}

      <AddressPostButton onClick={(e) => postCodeHandler(e)}>
        Address
      </AddressPostButton>
      <MiddleWrapper>
        <SignButton
          disabled={isValid}
          mode={"login"}
          onClickHandler={submitHandler}
        >
          SignUp
        </SignButton>
        <div>
          이미 계정이 있으십니까? <Link to={"/login"}>Login</Link>
        </div>
      </MiddleWrapper>
    </Container>
  );
}

const Container = styled.form`
  width: 620px;
  padding: 64px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const MiddleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  div {
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    a {
      color: #2d7df4;
    }
  }
`;

const AddressPostButton = styled.button`
  padding: 14px;
  border: none;
  background-color: #383838;
  color: white;
  border-radius: 8px;
`;

const AddressInputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    border-bottom: 1px solid #9e9e9e;

    input {
      width: 100%;
      font-size: 14px;
      margin-bottom: 8px;
      border: none;
      outline: none;
      line-height: 1.2rem;
    }
  }
`;
