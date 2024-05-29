import React, { useRef } from "react";
import "../App.css";

export const CodeUseRefCss = () => {
  const colorRef = useRef(null);
  const changeColor = () => {
    colorRef.current.className === "box"
      ? (colorRef.current.className = "box-modify")
      : (colorRef.current.className = "box");
  };

  return (
    <>
      <div className="box" ref={colorRef}>
        I'm in a Box
      </div>
      <button onClick={changeColor}>ModifyColor</button>
    </>
  );
};
