import React, { useState } from "react";
import "./App.css";

// Array of possible directions the robot can face
const directions = ["NORTH", "EAST", "SOUTH", "WEST"];

function App() {
  // State to store the current position of the robot on the grid (x, y)
  const [position, setPosition] = useState({ x: 2, y: 2 });

  // State to store the current direction the robot is facing
  const [direction, setDirection] = useState("SOUTH");

  // Function to move the robot forward in the direction it is currently facing
  const moveForward = () => {
    setPosition((prev) => {
      let { x, y } = prev;

      // Update the position based on the current direction
      switch (direction) {
        case "NORTH":
          x = x > 0 ? x - 1 : x; // Move up if not at the top edge
          break;
        case "SOUTH":
          x = x < 4 ? x + 1 : x; // Move down if not at the bottom edge
          break;
        case "EAST":
          y = y < 4 ? y + 1 : y; // Move right if not at the right edge
          break;
        case "WEST":
          y = y > 0 ? y - 1 : y; // Move left if not at the left edge
          break;
        default:
          break;
      }
      return { x, y };
    });
  };

  // Function to rotate the robot 90 degrees to the right (clockwise)
  const rotateRight = () => {
    setDirection((prev) => directions[(directions.indexOf(prev) + 1) % 4]);
  };

  // Function to rotate the robot 90 degrees to the left (counter-clockwise)
  const rotateLeft = () => {
    setDirection((prev) => directions[(directions.indexOf(prev) + 3) % 4]);
  };

  return (
    <div className="App">
      {/* Company logo at the top left corner */}
      <img
        src="https://recruiting.cdn.greenhouse.io/external_greenhouse_job_boards/logos/000/003/942/original/logo_(1)_(1).gif?1511850194"
        alt="Company Logo"
        className="App-logo"
      />

      {/* Main title */}
      <h1>Bellroy's Robot Simulator</h1>

      {/* Grid of 5x5 cells representing the area where the robot can move */}
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
                        ? `robot ${direction.toLowerCase()}` // Apply robot class if the robot is in this cell
                        : ""
                    }`}
                    key={col}
                  >
                    {position.x === col && position.y === row && (
                      <div className="head"></div> // Head indicator for the robot
                    )}
                  </div>
                ))}
            </div>
          ))}
      </div>

      {/* Controls to move and rotate the robot */}
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

      {/* Display the current direction the robot is facing */}
      <p>Robot is facing: {direction}</p>
    </div>
  );
}

export default App;
