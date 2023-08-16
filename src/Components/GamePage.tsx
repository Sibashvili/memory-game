import { useState, useEffect } from "react";
import styled from "styled-components";
import Timer from "./Timer";
import Multi from "./Multiplayer";
import Result from "./Resultinfo";

import Card from "../assets/card-game.png";
import Child from "../assets/child-game.png";
import Coin from "../assets/coin.png";
import Fruit from "../assets/fruit(1).png";
import Gamepng from "../assets/game.png";
import Gamepad from "../assets/gamepad(1).png";
import Load from "../assets/load.png";
import Fruits from "../assets/fruit.png";
import Memcar from "../assets/memory-card.png";
import Memcard1 from "../assets/memory-game(1).png";
import Memcard2 from "../assets/memory-game(2).png";
import Memcard3 from "../assets/memory-game(3).png";
import Memcard4 from "../assets/memory-game.png";
import Trasfer from "../assets/memory-transfer.png";
import Memory from "../assets/memory.png";
import Puzzle from "../assets/puzzle-piece.png";
import Save from "../assets/save(1).png";
import SingleResult from "./SingleResult";
import { Link } from "react-router-dom";

type propsType = {
  selectedGridSize: number;
  selectedOption: string;
  selectedNumPlayer: number;
};
function Game({
  selectedGridSize,
  selectedOption,
  selectedNumPlayer,
}: propsType) {
  const [menu, setMenu] = useState<boolean>(false);
  const [flippedBalls, setFlippedBalls] = useState<number[]>([]);
  const [players, setPlayers] = useState(
    Array.from({ length: selectedNumPlayer }, (_, index) => ({
      name: `P${index + 1}`,
      score: 0,
    }))
  );
  const [seconds, setSeconds] = useState<number>(0);
  const [matchedPairs, setMatchedPairs] = useState<number[]>([]);
  const [currentPlayer, setCurrentPlayer] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [items, setItems] = useState<string[]>([]);

  const gridSize = selectedGridSize;

  const gridRows = gridSize;
  const gridColumns = gridSize;
  const allPairsMatched = matchedPairs.length === gridSize * gridSize;

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
    Puzzle,
  ];

  const generateItems = (numPairs: number, selectedOption: string) => {
    const items = [];

    if (selectedOption === "Numbers") {
      for (let i = 1; i <= numPairs; i++) {
        items.push(i.toString());
      }
    } else if (selectedOption === "Cards") {
      for (let i = 0; i < numPairs; i++) {
        items.push(imageArray[i]);
      }
    }
    return items;
  };
  useEffect(() => {
    setCurrentPlayer(moveCount % selectedNumPlayer);
  }, [moveCount, selectedNumPlayer]);
  useEffect(() => {
    const generatedItems = generateItems(
      (gridSize * gridSize) / 2,
      selectedOption
    );

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
  const handleMatch = (playerIndex: number) => {
    setPlayers((prevPlayers) => {
      const updatedPlayers = [...prevPlayers];
      updatedPlayers[playerIndex].score += 1 / 2;
      return updatedPlayers;
    });
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

      if (items[index1] === items[index]) {
        setFlippedBalls([]);
        setMatchedPairs((prev) => [...prev, index1, index]);
        handleMatch(currentPlayer);
        return;
      }
    }

    setFlippedBalls((prev) => [...prev, index]);
  };
  useEffect(() => {
    console.log(flippedBalls);
    if (flippedBalls.length === 2) {
      const [index1, index2] = flippedBalls;
      if (items[index1] === items[index2]) {
        setMatchedPairs((prev) => [...prev, index1, index2]);
        setFlippedBalls([]);
      } else {
        setCurrentPlayer((prevIndex) => (prevIndex + 1) % selectedNumPlayer);
      }

      setIsAnimating(true);
      setTimeout(() => {
        setFlippedBalls([]);
        setIsAnimating(false);
        handleMove();
      }, 1000);
    }
  }, [flippedBalls, items, matchedPairs]);
  const toggleMenu = () => {
    setMenu((prevMenu) => !prevMenu);
    document.body.style.overflow = menu ? "auto" : "hidden";
  };
  const handleRestart = () => {
    setFlippedBalls([]);
    setPlayers(
      Array.from({ length: selectedNumPlayer }, (_, index) => ({
        name: `P${index + 1}`,
        score: 0,
      }))
    );
    setSeconds(0);
    setMatchedPairs([]);
    setCurrentPlayer(0);
    setMoveCount(0);
  };

  return (
    <Main>
      {menu && (
        <Backdrop onClick={toggleMenu}>
          {" "}
          <MenuBar>
            <MenuButton menuOpen={menu} onClick={handleRestart}>
              Restart
            </MenuButton>
            <Link to={`/startpage`}>
              <MenuButton menuOpen={menu}>New Game</MenuButton>
            </Link>
            <MenuButton menuOpen={menu}>Resume</MenuButton>
          </MenuBar>
        </Backdrop>
      )}
      <Head>
        <Mem menuOpen={menu}>memory</Mem>
        <Menu menuOpen={menu} onClick={toggleMenu}>
          Menu
        </Menu>
      </Head>

      <Center>
        <BallGrid rows={gridRows} columns={gridColumns}>
          {items.map((item, index) => (
            <Ball
              key={index}
              isMatched={matchedPairs.includes(index)}
              isFlipped={flippedBalls.includes(index)}
              onClick={() => handleBallClick(index)}
              gridSize={gridSize}
            >
              {flippedBalls.includes(index) || matchedPairs.includes(index) ? (
                selectedOption === "Numbers" ? (
                  item
                ) : (
                  <Image src={item} alt={`Cards ${index}`} />
                )
              ) : null}
            </Ball>
          ))}
        </BallGrid>
      </Center>
      {selectedNumPlayer === 1 && (
        <BottomDiv>
          {selectedNumPlayer === 1 && (
            <Timer seconds={seconds} setSeconds={setSeconds} />
          )}
          <Flexdiv>
            {selectedNumPlayer === 1 && (
              <>
                <MoveCounter>Moves</MoveCounter>
                <NumMove>{moveCount}</NumMove>
              </>
            )}
          </Flexdiv>
        </BottomDiv>
      )}
      {selectedNumPlayer > 1 && (
        <Multi players={players} currentPlayer={currentPlayer} />
      )}
      {selectedNumPlayer === 1 && allPairsMatched && (
        <SingleResult
          moveCount={moveCount}
          seconds={seconds}
          handleRestart={handleRestart}
        />
      )}

      {selectedNumPlayer > 1 && allPairsMatched && (
        <Result players={players} handleRestart={handleRestart} />
      )}
    </Main>
  );
}
interface BallGridProps {
  rows: number;
  columns: number;
}

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;

  display: flex;
  justify-content: center;
  align-items: center;
`;
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
  @media (min-width: 768px) {
    padding-bottom: 50px;
  }
`;
const Mem = styled.h1<{ menuOpen: boolean }>`
  color: ${(props) => (props.menuOpen ? "#ffffff" : "#152938")};
  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

const Menu = styled.button<{ menuOpen: boolean }>`
  border: none;
  width: 78px;
  height: 40px;
  background-color: ${(props) => (props.menuOpen ? "#dfe7ec" : "#fda214")};
  border-radius: 26px;
  color: ${(props) => (props.menuOpen ? "#304859" : "#fcfcfc")};
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
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
`;
const MenuButton = styled.button<{ menuOpen: boolean }>`
  width: 279px;
  height: 48px;
  border-radius: 26px;
  background-color: ${(props) => (props.menuOpen ? "#dfe7ec" : "#fda214")};
  color: ${(props) => (props.menuOpen ? "#304859" : "#fcfcfc")};
  font-size: 18px;
  border: none;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
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
  @media (min-width: 768px) {
    grid-template-columns: repeat(
      ${(props) => props.columns},
      ${(props) => (props.columns === 4 ? "100px" : "82px")}
    );
    grid-template-rows: repeat(
      ${(props) => props.rows},
      ${(props) => (props.rows === 4 ? "100px" : "82px ")}
    );
  }
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
  overflow: hidden;

  animation: ${(props) =>
    props.isFlipped ? "ballRotation 0.7s forwards" : "none"};
  @media (min-width: 768px) {
    font-size: ${(props) => (props.gridSize === 6 ? "56px" : "44px")};
  }
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
  @media (min-width: 768px) {
    margin-top: 0px;
  }
`;
const BottomDiv = styled.div`
  display: flex;
  gap: 25px;
  @media (min-width: 768px) {
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 25px;
  }
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
  @media (min-width: 768px) {
    width: 255px;
    height: 72px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 20px;
    margin-top: 0px;
  }
`;
const NumMove = styled.div`
  font-size: 24px;
  color: #304859;
`;
const Image = styled.img`
  width: 100%;
`;

export default Game;
