import React from "react";

const LibrarySong = ({ song, songs, setSongs, setCurrentSong, id, audioRef, isPlaying, activeLibraryHandler }) => {
  //Event Handlers
  const songSelectHandler = async () => {
    await setCurrentSong(song);
    activeLibraryHandler(song);
    if (isPlaying) audioRef.current.play();
  };

  return (
    <div onClick={songSelectHandler} className={`library-song ${song.active ? "selected" : ""}`}>
      <img src={song.cover} alt="" />
      <div className="song-info">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
