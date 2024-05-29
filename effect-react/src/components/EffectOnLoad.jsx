import React, { useState, useEffect } from "react";

const EffectOnLoad = ({ name }) => {
    
  const [nameState, setNameState] = useState(name);

  useEffect(() => {
    setTimeout(() => {
      setNameState("Brisna");
    }, 1500);
  }, []);

  return (
    <div>
      <h4>{nameState}</h4>

      <input
        type="text"
        value={nameState}
        onChange={(event) => setNameState(event.target.value)}
      />
    </div>
  );
};

export default EffectOnLoad;
