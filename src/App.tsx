import { Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Game from "./Components/GamePage";

import StartPage from "./Components/StartPage";
function App() {
  const [selectedGridSize, setSelectedGridSize] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string>("Numbers");
  const [selectedNumPlayer, setSelectedNumPlayer] = useState<number>(1);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/startpage" replace />} />
        <Route
          path="/startpage"
          element={
            <StartPage
              selectedGridSize={selectedGridSize}
              setSelectedGridSize={setSelectedGridSize}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
              setSelectedNumPlayer={setSelectedNumPlayer}
              selectedNumPlayer={selectedNumPlayer}
            />
          }
        />
        <Route
          path="/gamepage"
          element={
            <Game
              selectedGridSize={selectedGridSize}
              selectedOption={selectedOption}
              selectedNumPlayer={selectedNumPlayer}
            />
          }
        />
      </Routes>
    </>
  );
}
export default App;
