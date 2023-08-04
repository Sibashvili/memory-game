import { useState, useEffect } from "react";
import styled from "styled-components";
import Timer from "./Timer";

import Card from "../assets/card-game.png";
import Child from "../assets/child-game.png";
import Coin from "../assets/coin.png";
import Fruit from "../assets/fruit (1).png";
import Gamepng from "../assets/game.png";
import Gamepad from "../assets/gamepad (1).png";
import Load from "../assets/load.png";
import Fruits from "../assets/fruit.png";
import Memcar from "../assets/memory-card.png";
import Memcard1 from "../assets/memory-game (1).png";
import Memcard2 from "../assets/memory-game (2).png";
import Memcard3 from "../assets/memory-game (3).png";
import Memcard4 from "../assets/memory-game.png";
import Trasfer from "../assets/memory-transfer.png";
import Memory from "../assets/memory.png";
import Puzzle from "../assets/puzzle-piece.png";
import Save from "../assets/save (1).png";
type propsType = {
  selectedGridSize: number;
  selectedOption: string;
};
function Game({ selectedGridSize, selectedOption }: propsType) {
  const [menu, setMenu] = useState<boolean>(false);
  const [flippedBalls, setFlippedBalls] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<number[]>([]);
  const [numbers, setNumbers] = useState<number[]>([]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [items, setItems] = useState<string[]>([]);

  const gridSize = selectedGridSize;
  const gridRows = gridSize;
  const gridColumns = gridSize;
  const imageArray = [
    Card,
    Child,
    Coin,
    Fruit,
    Gamepng,
    Gamepad,
    Load,
    Fruits,
    Memcar,
    Memcard1,
    Memcard2,
    Memcard3,
    Memcard4,
    Trasfer,
    Memory,
    Puzzle,
    Save,
  ];

  const generateItems = (numPairs: number, selectedOption: string) => {
    const items = [];
    if (selectedOption === "Numbers") {
      for (let i = 1; i <= numPairs; i++) {
        items.push(i.toString());
      }
    } else if (selectedOption === "Icons") {
      for (let i = 0; i < numPairs; i++) {
        items.push(imageArray[i]);
      }
    }
    return items;
  };
  useEffect(() => {
    const generatedItems = generateItems(gridSize * gridSize, selectedOption);
    const shuffledItems = shuffleArray([...generatedItems, ...generatedItems]);
    setItems(shuffledItems);
  }, [gridSize]);

  const handleMove = () => {
    setMoveCount((prevCount) => prevCount + 1);
  };
  const shuffleArray = (array: any[]) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };
  const handleBallClick = (index: number) => {
    if (
      isAnimating ||
      flippedBalls.includes(index) ||
      matchedPairs.includes(index)
    )
      return;

    if (flippedBalls.length === 1) {
      const [index1] = flippedBalls;

      if (numbers[index1] === numbers[index]) {
        setMatchedPairs((prev) => [...prev, index1, index]);
        return;
      }
    }

    setFlippedBalls((prev) => [...prev, index]);
  };
  useEffect(() => {
    if (flippedBalls.length === 2) {
      const [index1, index2] = flippedBalls;
      if (items[index1] === items[index2]) {
        setMatchedPairs((prev) => [...prev, index1, index2]);
      }

      setIsAnimating(true);
      setTimeout(() => {
        setFlippedBalls([]);
        setIsAnimating(false);
        handleMove();
      }, 1000);
    }
  }, [flippedBalls, items, isAnimating]);

  return (
    <Main>
      <Head>
        <Mem>memory</Mem>
        <Menu onClick={() => setMenu(!menu)}>Menu</Menu>
      </Head>
      {menu && (
        <MenuBar>
          <MenuButton>Restart</MenuButton>
          <MenuButton>New Game</MenuButton>
          <MenuButton>Resume</MenuButton>
        </MenuBar>
      )}
      <Center>
        <BallGrid rows={gridRows} columns={gridColumns}>
          {numbers.map((number, index) => (
            <Ball
              key={index}
              isMatched={matchedPairs.includes(index)}
              isFlipped={flippedBalls.includes(index)}
              onClick={() => handleBallClick(index)}
              gridSize={gridSize}
            >
              {flippedBalls.includes(index) || matchedPairs.includes(index)
                ? number
                : null}
            </Ball>
          ))}
        </BallGrid>
      </Center>
      <BottomDiv>
        <Timer />
        <Flexdiv>
          <MoveCounter>Moves </MoveCounter>
          <NumMove>{moveCount}</NumMove>
        </Flexdiv>
      </BottomDiv>
    </Main>
  );
}
interface BallGridProps {
  rows: number;
  columns: number;
}

const Main = styled.section`
  width: 100%;
  background-color: #fcfcfc;
  height: 100%;
`;
const Head = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px;
  padding-bottom: 100px;
`;
const Mem = styled.h1`
  color: #152938;
`;
const Menu = styled.button`
  border: none;
  width: 78px;
  height: 40px;
  background-color: #fda214;
  border-radius: 26px;
  color: #fcfcfc;
  cursor: pointer;
`;
const MenuBar = styled.div`
  width: 327px;
  height: 224px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  background-color: #f2f2f2;

  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const MenuButton = styled.button`
  width: 279px;
  height: 48px;
  border-radius: 26px;
  background-color: #dfe7ec;
  color: #fcfcfc;
  font-size: 18px;
  border: none;
  color: #304859;

  &: hover {
    background-color: #fda214;
    color: #fcfcfc;
  }
`;
const BallGrid = styled.div<BallGridProps>`
  display: grid;
  grid-template-columns: repeat(
    ${(props) => props.columns},
    ${(props) => (props.columns === 4 ? "72.5px" : "46.8px")}
  );
  grid-template-rows: repeat(
    ${(props) => props.rows},
    ${(props) => (props.rows === 4 ? "72.5px" : "46.8px ")}
  );
  gap: 10px;
  margin: 20px auto;
`;

const Ball = styled.div<{
  isMatched: boolean;
  isFlipped: boolean;
  gridSize: number;
}>`
  width: 100%;
  height: 100%;
  background-color: ${(props) => (props.isMatched ? "#FDA214" : "#304859")};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => (props.gridSize === 6 ? "24px" : "40px")};
  line-height: 49.6px;
  color: #fcfcfc;
  cursor: pointer;
  transition: background-color 0.3s;

  animation: ${(props) =>
    props.isFlipped ? "ballRotation 0.7s forwards" : "none"};
`;
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MoveCounter = styled.div`
  font-size: 20px;
  margin-top: 10px;
  text-align: center;
  color: #7191a5;
`;
const BottomDiv = styled.div`
  display: flex;
  gap: 25px;
`;

const Flexdiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 151px;
  height: 70px;
  background-color: #dfe7ec;
  border-radius: 5px;
  margin-top: 100px;
`;
const NumMove = styled.div`
  font-size: 24px;
  color: #304859;
`;
export default Game;
