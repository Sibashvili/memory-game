import styled from "styled-components";
import { Link } from "react-router-dom";
type propsType = {
  players: {
    name: string;
    score: number;
  }[];
  handleRestart: any;
};

function Result({ players, handleRestart }: propsType) {
  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);

  return (
    <ResultWin>
      <Info>
        <Win>{sortedPlayers[0].name} Wins!</Win>
        <GameOver>Game over! Here are the results…</GameOver>
        <Players>
          {sortedPlayers.map((player, index) => (
            <Player key={index} isWinner={index === 0}>
              {player.name}
              <Score isWinner={index === 0}>{player.score} Pairs</Score>
            </Player>
          ))}
        </Players>
        <Res onClick={handleRestart}>Restart</Res>
        <Link to={`/startpage`}>
          <NewGame>Setup New Game</NewGame>
        </Link>
      </Info>
    </ResultWin>
  );
}

const ResultWin = styled.div`
  width: 327px;
  height: 488px;
  background-color: #f2f2f2;
  position: absolute;
  top: 14%;
  left: 7%;
  margin: auto;
  border-radius: 10px;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
`;
const Win = styled.p`
  font-size: 24px;
  color: #152938;
  text-align: center;
  margin-top: 32px;
`;
const GameOver = styled.p`
  font-size: 14px;
  color: #7191a5;
  text-align: center;
  margin-top: 9px;
`;
const Players = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  justify-content: center;
  align-items: center;
  padding-bottom: 24px;
`;
const Player = styled.div<{ isWinner: boolean }>`
  width: 279px;
  height: 48px;
  background-color: ${(props) => (props.isWinner ? "#152938" : "#dfe7ec")};
  border-radius: 5px;
  margin-top: 8px;
  font-size: 13px;
  color: ${(props) => (props.isWinner ? "#ffffff" : "#7191a5")};
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Res = styled.button`
  width: 279px;
  height: 48px;
  background-color: #fda214;
  color: #fcfcfc;
  font-size: 18px;
  margin: auto;

  border: none;
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
  border-radius: 26px;
`;
const NewGame = styled.button`
  width: 279px;
  height: 48px;
  background-color: #dfe7ec;
  color: #304859;
  font-size: 18px;
  margin: auto;

  border: none;
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
  border-radius: 26px;
  margin-top: 16px;
`;
const Score = styled.h1<{ isWinner: boolean }>`
  font-size: 20px;
  font-weight: 700;
`;

export default Result;
