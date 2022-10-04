/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ImageSelector from "../ProductRegister/ImageSelector";
import InputText from "../ProductRegister/InputText";
import { useDaumPostcodePopup } from "react-daum-postcode";
import usePatchUserData from "../../hooks/usePatchUserData";
import Loading from "../Commons/Loading";
import useGetUserInfo from "../../hooks/useGetUserInfo";

export default function EditProfile() {
  const [profileImg, setProfileImg] = useState([]);
  const [inputs, setInputs] = useState({
    name: "",
    phone: "",
  });
  const [address, setAddress] = useState("");
  const [postCode, setPostCode] = useState("");

  const userInfo = useSelector((state) => state.user);
  const open = useDaumPostcodePopup();
  const updateUser = useGetUserInfo(userInfo.id);
  const patchUserData = usePatchUserData(
    {
      ...inputs,
      homeAddress: address,
      zipcode: postCode,
      profileImage: profileImg[0],
    },
    userInfo.id
  );

  useEffect(() => {
    setInputs({
      name: userInfo.name,
      phone: userInfo.phone,
    });
    setProfileImg([userInfo.profileImg]);
    setAddress(userInfo.address);
    setPostCode(userInfo.postcode);
  }, [userInfo]);

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

  const inputChangeHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  if (patchUserData.isLoading || updateUser.isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <ImageSelector
        name="profile_image"
        label={"profile Image"}
        changeHandler={setProfileImg}
      />
      <InputWrapper>
        <InputText
          name={"name"}
          label={"User Name"}
          text={"Input User Name"}
          require={false}
          mode={"title"}
          type={"text"}
          value={inputs.name}
          changeHandler={inputChangeHandler}
        />
        <InputText
          name={"phone"}
          label={"Phone Number"}
          text={"Input phone number"}
          require={false}
          mode={"title"}
          type={"text"}
          value={inputs.phone}
          changeHandler={inputChangeHandler}
        />
        <InputText
          name={"address"}
          label={"Address"}
          text={"Input Address"}
          require={false}
          mode={"title"}
          type={"text"}
          value={address}
          disabled={true}
        />
        <InputText
          name={"postcode"}
          label={"PostCode"}
          text={"Input post code"}
          require={false}
          mode={"title"}
          type={"text"}
          value={postCode}
          disabled={true}
        />
        <AddressPostButton onClick={(e) => postCodeHandler(e)}>
          Address
        </AddressPostButton>
        <EditPostButton onClick={() => patchUserData.mutate()}>
          Edit
        </EditPostButton>
      </InputWrapper>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 24px;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const AddressPostButton = styled.button`
  padding: 14px;
  border: none;
  background-color: #383838;
  color: white;
  border-radius: 8px;
`;

const EditPostButton = styled.button`
  padding: 16px;
  border: none;
  background-color: #2d7df4;
  color: white;
  border-radius: 8px;
  font-size: 1rem;
`;
