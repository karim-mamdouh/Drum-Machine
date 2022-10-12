//React
import React, { useEffect, useRef } from "react";

const DrumPad = ({ pad, setActivePad }) => {
  const padRef = useRef();

  const padClick = () => {
    padRef.current.play();
    setActivePad(pad.fileName);
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key.toLowerCase() === pad.name.toLowerCase()) {
        padClick();
      }
    };

    window.addEventListener("keyup", handleKey);

    return () => window.removeEventListener("keyup", handleKey);
  }, []);

  return (
    <button
      className="drum-pad btn btn-primary m-2"
      id={pad.name}
      onClick={padClick}
    >
      <p>{pad.name}</p>
      <audio
        src={pad.audio}
        id={pad.name}
        className="clip"
        ref={padRef}
      ></audio>
    </button>
  );
};

export default DrumPad;
