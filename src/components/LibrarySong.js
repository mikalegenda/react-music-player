import React from "react";

const LibrarySong = ({ song, songs, setCurrentSong, id, audioRef, isPlaying }) => {
  //Event Handlers
  const songSelectHandler = () => {
    setCurrentSong(song);
    //Check if song is playing
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          audioRef.current.play();
        });
      }
    }
  };

  return (
    <div onClick={songSelectHandler} className="library-song">
      <img src={song.cover} alt="" />
      <div className="song-info">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
