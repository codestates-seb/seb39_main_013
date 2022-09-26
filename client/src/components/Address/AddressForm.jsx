import React from "react";
import DaumPostcode from "react-daum-postcode";

export default function AddressForm() {
  const getAddressHandler = (data) => {
    console.log(data);
  };

  const searchAddressHandler = (data) => {
    console.log(data);
  };

  return (
    <div>
      <DaumPostcode
        onSearch={searchAddressHandler}
        onComplete={getAddressHandler}
      />
    </div>
  );
}
