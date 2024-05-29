import React, { useState } from "react";

const MyState = () => {
    
  const [name, setMyName] = useState("Brisna Paez");

  return (
    <div>
      <h1>Bienvenido {name}</h1>

      <input
        type="text"
        value={name}
        onChange={(ev) => setMyName(ev.target.value)}
      />
    </div>
  );
};

export default MyState;
