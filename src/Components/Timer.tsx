import { useState, useEffect } from "react";
import * as React from "react";
import styled from "styled-components";

const Timer: React.FC = () => {
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (timeInSeconds: number): string => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;

    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <Maindiv>
      <TimeSection>Time </TimeSection>
      <Timeri>{formatTime(seconds)}</Timeri>
    </Maindiv>
  );
};

const Maindiv = styled.div`
  width: 151px;
  height: 70px;
  background-color: #dfe7ec;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 24px;
  margin-top: 100px;
`;
const Timeri = styled.section`
  display: flex;
  font-size: 24px;
  color: #304859;
`;
const TimeSection = styled.h1`
  display: flex;
  color: #7191a5;
  font-size: 15px;
  margin-top: 10px;
`;
export default Timer;
