import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ songs, setSongs, setCurrentSong, audioRef, isPlaying, libraryActive }) => {
  return (
    <div className={`library ${libraryActive ? "active" : ""}`}>
      <div className="song-library">
        <h2>Library</h2>
        {songs.map((song) => (
          <LibrarySong
            song={song}
            songs={songs}
            key={song.id}
            id={song.id}
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
