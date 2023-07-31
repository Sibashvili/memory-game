import { Route, Routes } from "react-router-dom";

import "./App.css";
import GamePage from "./Components/GamePage";

import StartPage from "./Components/StartPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/gamepage" element={<GamePage />} />
      </Routes>
    </>
  );
}
export default App;
