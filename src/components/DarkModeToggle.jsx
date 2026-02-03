import React from "react";
import { useState } from "react";

const DarkModeToggle = ({ onToggle }) => {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {

  const Mode = !darkMode;

  setDarkMode(Mode);
  
  if (onToggle) onToggle(Mode);
  }
  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
