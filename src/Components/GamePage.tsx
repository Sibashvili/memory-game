import { useState } from "react";
import styled from "styled-components";
import Card from "../assets/card-game.png";
import Child from "../assets/child-game.png";
import Coin from "../assets/coin.png";
import Fruit from "../assets/fruit (1).png";
import Gamepng from "../assets/game.png";
import Gamepad from "../assets/gamepad (1).png";
import load from "../assets/load.png";
import Fruits from "../assets/fruit.png";
import Memcar from "../assets/memory-card.png";
import Memcard1 from "../assets/memory-game (1).png";
import Memcard2 from "../assets/memory-game (2).png";
import Memcard3 from "../assets/memory-game (3).png";
import Memcard4 from "../assets/memory-game.png";
import Trasfer from "../assets/memory-transfer.png";
import memory from "../assets/memory.png";
import puzzle from "../assets/puzzle-piece.png";
import save from "../assets/save (1).png";
function Game() {
  const [menu, setMenu] = useState<boolean>(false);
  const numbers = [];
  const icon = [];

  const gridSize = menu ? "4x4" : null;
  const gridRows = gridSize === "4x4" ? 4 : 4;
  const gridColumns = gridSize === "4x4" ? 4 : 4;

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
          {Array.from({ length: gridRows * gridColumns }).map((_, index) => (
            <Ball key={index} />
          ))}
        </BallGrid>
      </Center>
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
  padding-bottom: 200px;
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
  grid-template-columns: repeat(${(props) => props.columns}, 72.5px);
  grid-template-rows: repeat(${(props) => props.rows}, 72.5px);
  gap: 10px;
  margin: 20px auto;
`;

const Ball = styled.div`
  width: 100%;
  height: 100%;
  background-color: #304859;
  border-radius: 50%;
`;
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Game;
