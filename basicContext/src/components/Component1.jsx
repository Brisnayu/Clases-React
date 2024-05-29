import React, { useState, createContext } from "react";
import Component2 from "./Component2";

export const UserContext = createContext();

const Component1 = () => {
  const [user, setUser] = useState("Hera Margarita");
  return (
    <div>
      <UserContext.Provider value={user}>
        <h2>Bienvenido {user}</h2>
        <input
          type="text"
          value={user}
          onChange={(event) => setUser(event.target.value)}
        />

        <Component2 />
      </UserContext.Provider>
    </div>
  );
};

export default Component1;
