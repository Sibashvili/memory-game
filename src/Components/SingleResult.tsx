import styled from "styled-components";
import { Link } from "react-router-dom";
type propsType = {
  seconds: number;
  moveCount: number;
  handleRestart: any;
};

const formatTime = (timeInSeconds: number): string => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;

  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
};
function SingleResult({ seconds, moveCount, handleRestart }: propsType) {
  return (
    <SingleMain>
      <HeadSingle>You did it!</HeadSingle>
      <Over>Game over! Here’s how you got on…</Over>
      <FirstDiv>
        <Elapse>Time Elapsed</Elapse>
        <TimeSingle>{formatTime(seconds)}</TimeSingle>
      </FirstDiv>
      <SecondDiv>
        <Moves>Moves taken</Moves>
        <CountMove>{moveCount} Moves</CountMove>
      </SecondDiv>
      <Res onClick={handleRestart}>Restart</Res>
      <Link to={`/startpage`}>
        <NewGame>Setup New Game</NewGame>
      </Link>
    </SingleMain>
  );
}

const SingleMain = styled.div`
  width: 327px;
  height: 376px;
  background-color: #f2f2f2;
  border-radius: 10px;
  margin: auto;
  position: absolute;
  top: 16%;
  left: 6%;
`;
const HeadSingle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #152938;
  display: flex;
  justify-content: center;
  margin-top: 32px;
`;
const Over = styled.h1`
  font-size: 14px;
  font-weight: 700;
  color: #7191a5;
  display: flex;
  justify-content: center;
  margin-top: 9px;
  padding-bottom: 24px;
`;
const FirstDiv = styled.div`
  width: 279px;
  height: 48px;
  background-color: #dfe7ec;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 16px;
`;
const TimeSingle = styled.div`
  font-size: 20px;
  color: #304859;
`;
const Elapse = styled.h1`
  font-size: 13px;
  padding: 16px;
  color: #7191a5;
`;
const SecondDiv = styled.div`
  width: 279px;
  height: 48px;
  background-color: #dfe7ec;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 16px;
  margin-top: 10px;
`;
const Moves = styled.h1`
  font-size: 13px;
  padding: 16px;
  color: #7191a5;
  margin-top: 8px;
`;
const CountMove = styled.h1`
  font-size: 20px;
  color: #304859;
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
const Res = styled.button`
  width: 279px;
  height: 48px;
  background-color: #fda214;
  color: #fcfcfc;
  font-size: 18px;
  margin: auto;
  margin-top: 24px;

  border: none;
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
  border-radius: 26px;
`;
export default SingleResult;
