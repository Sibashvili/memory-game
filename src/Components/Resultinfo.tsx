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
        <DivFlex>
          <Res onClick={handleRestart}>Restart</Res>
          <Link to={`/startpage`}>
            <NewGame>Setup New Game</NewGame>
          </Link>
        </DivFlex>
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
  @media (min-width: 768px) {
    width: 654px;
    height: 510px;
    left: 8%;
  }
  @media (min-width: 1440px) {
    left: 30%;
    top: 17%;
  }
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
  @media (min-width: 768px) {
    font-size: 48px;
  }
`;
const GameOver = styled.p`
  font-size: 14px;
  color: #7191a5;
  text-align: center;
  margin-top: 9px;
  @media (min-width: 768px) {
    font-size: 18px;
  }
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
  @media (min-width: 768px) {
    width: 542px;
    height: 72px;
  }
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
  @media (min-width: 768px) {
    width: 264px;
    height: 52px;
    font-size: 20px;
    margin: 0;
  }
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
  @media (min-width: 768px) {
    width: 264px;
    height: 52px;
    font-size: 20px;
    margin: 0;
  }
`;
const Score = styled.h1<{ isWinner: boolean }>`
  font-size: 20px;
  font-weight: 700;
`;
const DivFlex = styled.div`
  @media (min-width: 768px) {
    display: flex;
    margin-top: 40px;
    gap: 14px;
    justify-content: center;
  }
`;

export default Result;
