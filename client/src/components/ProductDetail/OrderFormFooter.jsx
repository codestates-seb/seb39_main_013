import React from "react";
import styled from "styled-components";
import { MdOutlineVerified, MdGppGood } from "react-icons/md";
// import { FiCheck } from "react-icons/fi";

export default function OrderFormFooter() {
  return (
    <Container>
      <InfoWrapper>
        <MdOutlineVerified />
        <div>
          <p>100% 정품 보증</p>
          <p>검수한 상품이 정품이 아닐 경우, 구매가의 3배를 보상합니다.</p>
        </div>
      </InfoWrapper>
      <InfoWrapper>
        <MdGppGood />
        <div>
          <p>엄격한 다중 검수</p>
          <p>
            모든 상품은 검수센터에 도착한 후, 상품별 전문가 그룹의 체계적인
            시스템을 거쳐 검수를 진행합니다.
          </p>
        </div>
      </InfoWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 0;
`;

const InfoWrapper = styled.div`
  display: flex;
  gap: 12px;
  font-size: 14px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;

    p {
      &:nth-child(2) {
        color: #979797;
      }
    }
  }

  svg {
    width: 38px;
    height: 38px;

    fill: #948a8a;
  }
`;
