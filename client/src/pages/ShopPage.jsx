/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MainItems from "../components/MainItems/MainItems";
import ShopFilter from "../components/Shop/ShopFilter";
import { dummyColor } from "../constance/index";
import SubBanner from "../components/SubBanner/Subbanner";

export default function ShopPage() {
  const [params, setParams] = useState({
    majorClass: "",
    color: "",
    priceMax: 10000000,
    priceMin: 0,
  });
  const [page, setPage] = useState(1);
  const [changeList, setChangeList] = useState(false);

  const urlParams = {
    page,
    pageSize: 6,
    ...params,
  };

  useEffect(() => {
    setPage(1);
  }, [params]);

  return (
    <Container>
      <SubBanner
        imgUrl={`${process.env.PUBLIC_URL}/assets/images/shop_sub_banner.png`}
      />
      <ShopWrapper>
        <ShopFilter dummyColor={dummyColor} setParams={setParams} />
        <ItemsWrapper>
          <MainItems
            setPage={setPage}
            params={urlParams}
            mode={"shop"}
            changeList={changeList}
          />
        </ItemsWrapper>
      </ShopWrapper>
    </Container>
  );
}

const Container = styled.article`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ShopWrapper = styled.section`
  margin-top: 64px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
  width: 100%;
  max-width: 1280px;
`;

const ItemsWrapper = styled.div`
  grid-column-start: 2;
  grid-column-end: 5;
`;
