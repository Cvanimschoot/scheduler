import { useState } from "react";

export default function useVisualMode(initialMode) {
  const [mode, setMode] = useState(initialMode);
  const [history, setHistory] = useState([initialMode]);

  function transition(newMode, replace = false) {
    if (!replace) {
      history.push(mode);
      setMode(newMode);
    } else {
      history.pop(mode);
      setMode(newMode);
    }
  }

  function back() {
    if (!history.length <= 1) {
      setMode(history.pop());
    }
  }

  return { mode: mode, transition, back };
};