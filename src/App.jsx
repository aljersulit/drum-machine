import { useEffect, useState } from 'react'

function App() {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    addEventListener('keydown', (event) => {
      const hotKey = event.key.toUpperCase();
      let audioStr = "";
      switch (hotKey) {
        case "Q":
          audioStr = "Heater-1";
          break;
        case "W":
          audioStr = "Heater-2";
          break;
        case "E":
          audioStr = "Heater-3";
          break;
        case "A":
          audioStr = "Heater-4";
          break;
        case "S":
          audioStr = "Clap";
          break;
        case "D":
          audioStr = "Open-HH";
          break;
        case "Z":
          audioStr = "Kick-n'-hat"
          break;
        case "X":
          audioStr = "Kick";
          break;
        case "C":
          audioStr = "Closed-HH";
          break;
        default:
          audioStr = null;
          break;
      }
      if (audioStr) {
        setDisplay(audioStr);
      }
      sound(hotKey);
    })
  }, [])

  function handleClick(event) {
    sound(event.target.innerText)
    setDisplay(event.target.id)
  }
  
  function sound(selector) {
    const audio = document.getElementById(selector);
    if (audio === null) {
      return;
    } else if (audio) {
      audio.play();
    }
  }

  return (
    <div className="App" id="drum-machine">
      <div id="display">{display}</div>
      <div className="drumpad-container">
        <button className="drum-pad" id="Heater-1" onClick={handleClick}>
          <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
            id="Q"
            className="clip"
          ></audio>
          Q
        </button>
        <button className="drum-pad" id="Heater-2" onClick={handleClick}>
          <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
            id="W"
            className="clip"
          ></audio>
          W
        </button>
        <button className="drum-pad" id="Heater-3" onClick={handleClick}>
          <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
            id="E"
            className="clip"
          ></audio>
          E
        </button>
        <button className="drum-pad" id="Heater-4" onClick={handleClick}>
          <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
            id="A"
            className="clip"
          ></audio>
          A
        </button>
        <button className="drum-pad" id="Clap" onClick={handleClick}>
          <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
            id="S"
            className="clip"
          ></audio>
          S
        </button>
        <button className="drum-pad" id="Open-HH" onClick={handleClick}>
          <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
            id="D"
            className="clip"
          ></audio>
          D
        </button>
        <button className="drum-pad" id="Kick-n'-hat" onClick={handleClick}>
          <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
            id="Z"
            className="clip"
          ></audio>
          Z
        </button>
        <button className="drum-pad" id="Kick" onClick={handleClick}>
          <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
            id="X"
            className="clip"
          ></audio>
          X
        </button>
        <button className="drum-pad" id="Closed-HH" onClick={handleClick}>
          <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
            id="C"
            className="clip"
          ></audio>
          C
        </button>
      </div>
    </div>
  );
}

export default App




















