import cev from "../assets/audio/Cev_H2.mp3";
import dsc from "../assets/audio/Dsc_Oh.mp3";
import heat1 from "../assets/audio/Heater-1.mp3";
import heat2 from "../assets/audio/Heater-2.mp3";
import heat3 from "../assets/audio/Heater-3.mp3";
import heat4 from "../assets/audio/Heater-4_1.mp3";
import heat6 from "../assets/audio/Heater-6.mp3";
import kick from "../assets/audio/Kick_n_Hat.mp3";
import rp4 from "../assets/audio/RP4_KICK_1.mp3";

let id = 0;

const padFactory = (name, audio, fileName, id) => ({
  name,
  audio,
  fileName,
  id,
});

export const pads = [
  padFactory("Q", cev, "Cev_H2", 0),
  padFactory("W", dsc, "Dsc_Oh", ++id),
  padFactory("E", heat1, "Heater-1", ++id),
  padFactory("A", heat2, "Heater-2", ++id),
  padFactory("S", heat3, "Heater-3", ++id),
  padFactory("D", heat4, "Heater-4_1", ++id),
  padFactory("Z", heat6, "Heater-6", ++id),
  padFactory("X", kick, "Kick_n_Hat", ++id),
  padFactory("C", rp4, "RP4_KICK_1", ++id),
];
