import React, { useState, useEffect } from "react";

export const NewBoard = () => {
  const [board, setBoard] = useState(Array(undefined).fill(undefined));
  return [board, setBoard];
};

export const NewTask = () => {
  const [task, setTask] = useState(Array(undefined).fill(undefined));
  return [task, setTask];
};

export const HiddenOnMobileView = () => {
  const [hidden, setHidden] = useState(
    window.matchMedia(`(max-width: 460px)`).matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: 460px)`);
    const handleResize = () => setHidden(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return [hidden, setHidden];
};
