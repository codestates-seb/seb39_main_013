/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

export default function useValidate(value) {
  const [check, setCheck] = useState();

  console.log("inner validate :", value);
  useEffect(() => {
    // switch(value) {
    // }
  }, [value]);

  console.log(value);
  return <div>useValidate</div>;
}
