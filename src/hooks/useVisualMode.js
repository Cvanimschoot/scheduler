import { useState } from "react";

export default function useVisualMode(initialMode) {
  const [mode, setMode] = useState(initialMode);
  const [history, setHistory] = useState([initialMode]); // Stores the history of the modes, so you can go "back"

  // Allow transitions between different visual modes for appointments
  function transition(newMode, replace = false) {
    if (!replace) {
      history.push(mode);
      setMode(newMode);
    } else {
      history.pop(mode);
      setMode(newMode);
    }
  }

  // Allow you to go back to previous visual modes following the history that is stored
  function back() {
    if (!history.length <= 1) {
      setMode(history.pop());
    }
  }

  return { mode: mode, transition, back };
};