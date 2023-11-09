import React, { useState } from "react";

const useFlip = () => {
  const [state, setState] = useState(true);
  const toggleState = () => {
    setState((state) => !state);
  };
  return [state, toggleState];
};

export default useFlip;
// const [isFacingUp, setIsFacingUp] = useState(true);
// const flipCard = () => {
//   setIsFacingUp(isUp => !isUp);
// };
