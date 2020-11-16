import React from "react";

const SongInformation = ({ currentSong }) => {
  return (
    <div className="song-container">
      <img src={currentSong.cover} alt="song cover" />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default SongInformation;
