import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ songs, setSongs, setCurrentSong, audioRef, isPlaying }) => {
  return (
    <div className="library">
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
