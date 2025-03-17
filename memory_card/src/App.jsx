import { useState, useEffect } from "react";
import "./App.css";
import { LandingScreen } from "./components/LandingScreen";
import { GamePage } from "./components/GamePage";
import { Difficulty } from "./components/Difficulty";

function App() {
  const [gamePage, updateDisplayScreen] = useState(false); // To control the transition to Difficulty
  const [startGame, updateStartGame] = useState(false); // To control when the game starts

  // LandingScreen should appear if neither gamePage nor startGame is true
  if (!gamePage && !startGame) {
    return <LandingScreen updateDisplayScreen={updateDisplayScreen} />;
  }

  // Difficulty screen should appear if gamePage is true but startGame is false
  else if (gamePage && !startGame) {
    function keyListener() {
      useState(() => {
        const pressHandler = (e) => {};
      });
    }
    return <Difficulty updateGameStart={updateStartGame} />;
  }

  // Once startGame is true, the GamePage should appear
  else {
    return <GamePage />;
  }
}

export default App;
