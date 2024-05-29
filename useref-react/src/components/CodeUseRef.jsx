import React, { useRef, useState } from "react";

const CodeUseRef = () => {
  const textInput = useRef(null);
  const [name, setName] = useState("Brisna");

  const printValue = () => {
    const inputValue = textInput.current?.value;
    if (inputValue) setName(inputValue);
    console.log("Imprime nombre", inputValue);
  };

  return (
    <>
      <h3>Hola soy {name}</h3>
      <input type="text" placeholder="name" ref={textInput} />
      <button onClick={printValue}>Mostrar</button>
    </>
  );
};

export default CodeUseRef;
