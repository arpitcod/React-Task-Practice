// **Dark Mode Toggle**: Set the background color
//  to dark if dark mode is enabled, otherwise to light.
import React, { useState } from "react";

const DarkModeToggle = () => {
  const [mode, setMode] = useState(false);

  const modeStyle = {
    backgroundColor:mode ? "black" :"white",
    color:mode ? "white" :"black",
    height:"100vh"
  }
  return (
    <div className={`${mode ? "bg_dark" : "bg_white"}`} style={modeStyle}>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          checked={mode}
          onChange={() =>setMode(!mode)}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          {mode ? "LIght" : "Dark"}
        </label>
      </div>

      <h1>hare krishna</h1>
      <h1>hare krishna</h1>
      <h1>hare krishna</h1>
      <h1>hare krishna</h1>

    </div>
  );
};

export default DarkModeToggle;
