import * as React from "react";
import styled from "styled-components";

export default function StartPage() {
  return (
    <Body>
      <HeadTitle>memory</HeadTitle>
      <Card>
        <Select>Select Theme</Select>
        <HeadSection>
          <Number>Numbers</Number>
          <Cards>Cards</Cards>
        </HeadSection>
      </Card>
    </Body>
  );
}

const Body = styled.section`
  width: 100vw;
  height: 100vh;
`;
const HeadTitle = styled.a`
  font-size: 32px;
  color: #fcfcfc;
  display: flex;
  justify-content: center;
  margin-top: 80px;
  padding-bottom: 45px;
`;
const Card = styled.section`
  width: 327px;
  height: 386px;

  background-color: #fcfcfc;
  border-radius: 10px;
  margin: auto;
`;
const Select = styled.h1`
  font-size: 15px;
  color: #7191a5;
  padding: 24px;
`;
const HeadSection = styled.div`
  display: flex;
  gap: 11px;
  padding-left: 24px;
  padding-right: 24px;
`;
const Number = styled.button`
  width: 134px;
  height: 40px;
  border: none;
  border-radius: 26px;
  color: #fcfcfc;
  background-color: #bcced9;
`;
const Cards = styled.button`
  width: 134px;
  height: 40px;
  border: none;
  border-radius: 26px;
  color: #fcfcfc;
  background-color: #bcced9;
`;
