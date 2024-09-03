import React, { useState } from "react";
import "./App.css";

const directions = ["NORTH", "EAST", "SOUTH", "WEST"];

function App() {
  const [position, setPosition] = useState({ x: 2, y: 2 });
  const [direction, setDirection] = useState("SOUTH");

  const moveForward = () => {
    setPosition((prev) => {
      let { x, y } = prev;
      switch (direction) {
        case "NORTH":
          x = x > 0 ? x - 1 : x;
          break;
        case "SOUTH":
         x = x < 4 ? x + 1 : x;
          break;
        case "EAST": 
          y = y < 4 ? y + 1 : y;
          break;
        case "WEST":
          
          y = y > 0 ? y - 1 : y;
          break;
        default:
          break;
      }
      return { x, y };
    });
  };

  const rotateRight = () => {
    setDirection((prev) => directions[(directions.indexOf(prev) + 1) % 4]);
  };

  const rotateLeft = () => {
    setDirection((prev) => directions[(directions.indexOf(prev) + 3) % 4]);
  };

  return (
    <div className="App">
      <img
        src="https://recruiting.cdn.greenhouse.io/external_greenhouse_job_boards/logos/000/003/942/original/logo_(1)_(1).gif?1511850194"
        alt="Company Logo"
        className="App-logo"
      />
      <h1>Bellroy's Robot Simulator</h1>
      <div className="grid">
        {Array(5)
          .fill(0)
          .map((_, row) => (
            <div className="row" key={row}>
              {Array(5)
                .fill(0)
                .map((_, col) => (
                  <div
                    className={`cell ${
                      position.x === col && position.y === row
                        ? `robot ${direction.toLowerCase()}`
                        : ""
                    }`}
                    key={col}
                  >
                    {position.x === col && position.y === row && (
                      <div className="head"></div>
                    )}
                  </div>
                ))}
            </div>
          ))}
      </div>
      <div className="controls">
        <button className="button" onClick={moveForward}>
          Move Forward
        </button>
        <button className="button" onClick={rotateLeft}>
          Rotate Left
        </button>
        <button className="button" onClick={rotateRight}>
          Rotate Right
        </button>
      </div>
      <p>Robot is facing: {direction}</p>
    </div>
  );
}

export default App;
