import styled from "styled-components";
import { Link } from "react-router-dom";

type props = {
  selectedGridSize: number;
  setSelectedGridSize: React.Dispatch<React.SetStateAction<number>>;
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
  selectedNumPlayer: number;
  setSelectedNumPlayer: React.Dispatch<React.SetStateAction<number>>;
};

export default function StartPage({
  setSelectedGridSize,
  selectedGridSize,
  selectedOption,
  setSelectedOption,
  selectedNumPlayer,
  setSelectedNumPlayer,
}: props) {
  const handleGridSizeSelect = (size: number) => {
    setSelectedGridSize(size);
  };
  const handleChooseOption = (choose: string) => {
    setSelectedOption(choose);
  };
  const handleNumPlayerSelect = (numPlayers: number) => {
    setSelectedNumPlayer(numPlayers);
  };

  return (
    <Body>
      <HeadTitle>memory</HeadTitle>
      <Card>
        <Select>Select Theme</Select>
        <HeadSection>
          <Number
            isChoose={selectedOption === "Numbers"}
            onClick={() => handleChooseOption("Numbers")}
          >
            Numbers
          </Number>
          <Cards
            isChoose={selectedOption === "Cards"}
            onClick={() => handleChooseOption("Cards")}
          >
            Cards
          </Cards>
        </HeadSection>
        <Title>Numbers of Players</Title>
        <PlayerNum>
          <Num
            isSelected={selectedNumPlayer === 1}
            onClick={() => handleNumPlayerSelect(1)}
          >
            1
          </Num>
          <Num
            isSelected={selectedNumPlayer === 2}
            onClick={() => handleNumPlayerSelect(2)}
          >
            2
          </Num>
          <Num
            isSelected={selectedNumPlayer === 3}
            onClick={() => handleNumPlayerSelect(3)}
          >
            3
          </Num>
          <Num
            isSelected={selectedNumPlayer === 4}
            onClick={() => handleNumPlayerSelect(4)}
          >
            4
          </Num>
        </PlayerNum>
        <Grid>Grid Size</Grid>
        <Size>
          <GridSize
            isSelected={selectedGridSize === 4}
            onClick={() => handleGridSizeSelect(4)}
          >
            4x4
          </GridSize>
          <GridSize
            isSelected={selectedGridSize === 6}
            onClick={() => handleGridSizeSelect(6)}
          >
            6x6
          </GridSize>
        </Size>
        <Link to={`/gamepage`}>
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
  @media (min-width: 768px) {
    font-size: 40px;
  }
`;
const Card = styled.section`
  width: 327px;
  height: 386px;

  background-color: #fcfcfc;
  border-radius: 10px;
  margin: auto;
  @media (min-width: 768px) {
    width: 654px;
    height: 559px;
    padding: 56px;
  }
`;
const Select = styled.h1`
  font-size: 15px;
  color: #7191a5;
  padding: 24px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;
const HeadSection = styled.div`
  display: flex;
  gap: 11px;
  padding-left: 24px;
  padding-right: 24px;
`;
const Number = styled.button<{ isChoose: boolean }>`
  width: 134px;
  height: 40px;
  border: none;
  border-radius: 26px;
  color: #fcfcfc;
  background-color: ${({ isChoose }) => (isChoose ? "#304859" : "#bcced9")};
  cursor: pointer;
  @media (min-width: 768px) {
    width: 256px;
    height: 52px;
    font-size: 26px;
  }
`;
const Cards = styled.button<{ isChoose: boolean }>`
  width: 134px;
  height: 40px;
  border: none;
  border-radius: 26px;
  color: #fcfcfc;
  background-color: ${({ isChoose }) => (isChoose ? "#304859" : "#bcced9")};
  cursor: pointer;
  @media (min-width: 768px) {
    width: 256px;
    height: 52px;
    font-size: 26px;
  }
`;
const Title = styled.h1`
  font-size: 15px;
  margin-top: 24px;
  padding-left: 24px;
  color: #7191a5;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;
const PlayerNum = styled.div`
  display: flex;
  gap: 10px;
  padding-left: 24px;
  margin-top: 11px;
`;
const Num = styled.button<{ isSelected: boolean }>`
  border: none;
  border-radius: 26px;
  width: 62px;
  height: 40px;
  background-color: ${({ isSelected }) => (isSelected ? "#304859" : "#bcced9")};
  color: #fcfcfc;
  cursor: pointer;
  @media (min-width: 768px) {
    width: 119px;
    height: 52px;
    font-size: 26px;
  }
`;
const Grid = styled.h1`
  color: #7191a5;
  font-size: 15px;
  padding-left: 24px;
  margin-top: 24px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;
const Size = styled.div`
  display: flex;
  padding-left: 24px;
  gap: 11px;
  margin-top: 11px;

  position: relative;
`;
const GridSize = styled.button<{ isSelected: boolean }>`
  width: 134px;
  height: 40px;
  background-color: ${({ isSelected }) => (isSelected ? "#304859" : "#bcced9")};
  border: none;
  border-radius: 26px;
  color: #fcfcfc;
  cursor: pointer;
  @media (min-width: 768px) {
    width: 256px;
    height: 52px;
    font-size: 26px;
  }
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

  margin: auto;
  margin-top: 32px;
  cursor: pointer;
  underline: none;
  @media (min-width: 768px) {
    width: 541px;
    height: 52px;
    font-size: 26px;
  }
`;
