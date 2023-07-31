import styled from "styled-components";
import { Link } from "react-router-dom";

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
        <Title>Numbers of Players</Title>
        <PlayerNum>
          <Num>1</Num>
          <Num>2</Num>
          <Num>3</Num>
          <Num>4</Num>
        </PlayerNum>
        <Grid>Grid Size</Grid>
        <Size>
          <GridSize>4x4</GridSize>
          <GridSize>6x6</GridSize>
        </Size>
        <Link to="/gamepage">
          <Start>Start Game</Start>
        </Link>
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
  cursor: pointer;
`;
const Cards = styled.button`
  width: 134px;
  height: 40px;
  border: none;
  border-radius: 26px;
  color: #fcfcfc;
  background-color: #bcced9;
  cursor: pointer;
`;
const Title = styled.h1`
  font-size: 15px;
  margin-top: 24px;
  padding-left: 24px;
  color: #7191a5;
`;
const PlayerNum = styled.div`
  display: flex;
  gap: 10px;
  padding-left: 24px;
  margin-top: 11px;
`;
const Num = styled.button`
  border: none;
  border-radius: 26px;
  width: 62px;
  height: 40px;
  background-color: #bcced9;
  color: #fcfcfc;
  cursor: pointer;
`;
const Grid = styled.h1`
  color: #7191a5;
  font-size: 15px;
  padding-left: 24px;
  margin-top: 24px;
`;
const Size = styled.div`
  display: flex;
  padding-left: 24px;
  gap: 11px;
  margin-top: 11px;
  cursor: pointer;
  position: relative;
`;
const GridSize = styled.button`
  width: 134px;
  height: 40px;
  background-color: #bcced9;
  border: none;
  border-radius: 26px;
  color: #fcfcfc;
  cursor: pointer;
`;
const Start = styled.button`
  width: 279px;
  height: 48px;
  background-color: #fda214;
  border: none;
  border-radius: 26px;
  margin-top: 32px;
  font-size: 18px;
  color: #fcfcfc;
  margin-left: 24px;
  cursor: pointer;
`;
