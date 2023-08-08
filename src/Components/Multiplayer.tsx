import styled from "styled-components";
function Multi() {
  return (
    <MultiplayerBar>
      <Player>P1</Player>
      <Player>P2</Player>
      <Player>P3</Player>
      <Player>P4</Player>
    </MultiplayerBar>
  );
}

const MultiplayerBar = styled.div`
  display: flex;
  gap: 24px;
  background-color: red;
  width: 100px;
  height: 100px;
`;
const Player = styled.div`
  width: 64px;
  height: 70px;
  background-color: #dfe7ec;
  color: #7191a5;
  font-size: 15px;
`;
export default Multi;
