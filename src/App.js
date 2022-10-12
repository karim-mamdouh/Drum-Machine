//React
import { useState } from "react";
//Styling file
import "./App.css";
//Components
import DrumPad from "./components/DrumPad/DrumPad";
//Data
import { pads } from "./data/data";

function App() {
  const [activePad, setActivePad] = useState("");

  return (
    <>
      <header>
        <h1 className="text-center my-5 text-white">Drum Machine</h1>
      </header>
      <main
        className="flex-grow-1 d-flex flex-column justify-content-center align-items-center"
        id="drum-machine"
      >
        <div>
          {/* Active drum pad */}
          <p id="display" className="text-center text-white">
            <strong>Active Pad:</strong> {activePad}
          </p>
          {/* Drum pads */}
          <div className="d-flex flex-wrap">
            {pads.map((item) => (
              <DrumPad pad={item} key={item.id} setActivePad={setActivePad} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
