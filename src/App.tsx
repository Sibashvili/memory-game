import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import GamePage from "./Components/GamePage";

import StartPage from "./Components/StartPage";
function App() {
  const [selectedGridSize, setSelectedGridSize] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string>("Numbers");
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <StartPage
              selectedGridSize={selectedGridSize}
              setSelectedGridSize={setSelectedGridSize}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          }
        />
        <Route
          path="/gamepage"
          element={
            <GamePage
              selectedGridSize={selectedGridSize}
              selectedOption={selectedOption}
            />
          }
        />
      </Routes>
    </>
  );
}
export default App;
