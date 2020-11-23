import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryActive, setLibraryActive }) => {
  return (
    <nav>
      <h1>Waves</h1>
      <button
        onClick={() => {
          setLibraryActive(!libraryActive);
        }}
      >
        Library
        <FontAwesomeIcon icon={faMusic} className="music-icon" />
      </button>
    </nav>
  );
};

export default Nav;
