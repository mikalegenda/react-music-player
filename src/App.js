import React from "react";
import SongInformation from "./components/SongInformation";
import Player from "./components/Player";
import "./styles/app.scss";

function App() {
  return (
    <div className="App">
      <SongInformation />
      <Player />
    </div>
  );
}

export default App;
