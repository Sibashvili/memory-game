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
      <DivFlex>
        <Res onClick={handleRestart}>Restart</Res>
        <Link to={`/startpage`}>
          <NewGame>Setup New Game</NewGame>
        </Link>
      </DivFlex>
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
  @media (min-width: 768px) {
    width: 654px;
    height: 510px;
    left: 8%;
  }
  @media (min-width: 1440px) {
    left: 28%;
  }
`;
const HeadSingle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #152938;
  display: flex;
  justify-content: center;
  margin-top: 32px;
  @media (min-width: 768px) {
    font-size: 48px;
  }
`;
const Over = styled.h1`
  font-size: 14px;
  font-weight: 700;
  color: #7191a5;
  display: flex;
  justify-content: center;
  margin-top: 9px;
  padding-bottom: 24px;
  @media (min-width: 768px) {
    font-size: 18px;
  }
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
  border-radius: 10px;
  @media (min-width: 768px) {
    width: 542px;
    height: 72px;
  }
`;
const TimeSingle = styled.div`
  font-size: 20px;
  color: #304859;
`;
const Elapse = styled.h1`
  font-size: 13px;
  padding: 16px;
  color: #7191a5;
  @media (min-width: 768px) {
    font-size: 18px;
  }
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
  border-radius: 10px;
  @media (min-width: 768px) {
    width: 542px;
    height: 72px;
  }
`;
const Moves = styled.h1`
  font-size: 13px;
  padding: 16px;
  color: #7191a5;
  margin-top: 8px;
  @media (min-width: 768px) {
    font-size: 18px;
    margin-top: 0px;
  }
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
  margin-left: 24px;
  border: none;
  align-items: center;

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
const Res = styled.button`
  width: 279px;
  height: 48px;
  background-color: #fda214;
  color: #fcfcfc;
  font-size: 18px;
  margin: auto;
  margin-top: 24px;
  @media (min-width: 768px) {
    width: 264px;
    height: 52px;
    font-size: 20px;
    margin: 0;
  }

  border: none;
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
  border-radius: 26px;
`;
const DivFlex = styled.div`
  @media (min-width: 768px) {
    display: flex;
    margin-top: 40px;
    gap: 14px;
    display: flex;
    justify-content: center;
  }
`;
export default SingleResult;
