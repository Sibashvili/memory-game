import styled from "styled-components";

function Multi({
  players,
  currentPlayer,
}: {
  players: {
    name: string;
    score: number;
  }[];

  currentPlayer: number;
}) {
  return (
    <MultiplayerBar>
      {players.map((player, index) => (
        <Player key={player.name} isActive={index === currentPlayer}>
          {player.name}
          <MoveCount isActive={index === currentPlayer}>
            {player.score}
          </MoveCount>
        </Player>
      ))}
    </MultiplayerBar>
  );
}

const MultiplayerBar = styled.div`
  display: flex;
  gap: 24px;
  justify-content: center;
  margin-top: 102px;
  @media (min-width: 768px) {
    margin-top: 50px;
  }
`;
const Player = styled.div<{ isActive: boolean }>`
  width: 64px;
  height: 70px;
  background-color: ${({ isActive }) => (isActive ? "#FDA214" : "#dfe7ec")};
  color: ${({ isActive }) => (isActive ? "#FCFCFC" : "#7191A5")};
  font-size: 15px;
  border-radius: 5px;
  padding: 10px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const MoveCount = styled.div<{ isActive: boolean }>`
  font-size: 20px;
  color: ${({ isActive }) => (isActive ? "#FCFCFC" : "#304859")};
`;

export default Multi;
