/* eslint-disable react/prop-types */
import React from "react";

export default function Price(props) {
  const priceRegex = props.price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return <span>{priceRegex}</span>;
}
