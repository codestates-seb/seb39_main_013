import React from "react";
import useGetOrderList from "../../hooks/useGetOrderList";
import Loading from "../Commons/Loading";

export default function MyOrderList() {
  const getOrderList = useGetOrderList();

  if (getOrderList.isLoading) {
    return <Loading />;
  }

  console.log(getOrderList.data);
  return <div>MyOrderList</div>;
}
