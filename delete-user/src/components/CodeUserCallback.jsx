import React, { useState, useCallback } from "react";
import DeleteUser from "./DeleteUser";

const CodeUserCallback = () => {

  console.log("RenderUserCallback component")

  const [user, setUser] = useState({
    name: "Brisna",
    surname: "Paez",
    age: 30,
  });
  const deleteUserCallback = useCallback(() => {
    setUser({ name: "", surname: "", age: 0 });
  }, []);

  return (
    <>
      <h3>
        {user.name} || {user.surname} || {user.age}
      </h3>
      <input
        type="text"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <input
        type="text"
        value={user.surname}
        onChange={(e) => setUser({ ...user, surname: e.target.value })}
      />
      <input
        type="number"
        value={user.age}
        onChange={(e) => setUser({ ...user, age: e.target.value })}
      />
      <DeleteUser deleteUser={deleteUserCallback} name={"Reset User"}/>
    </>
  );
};

export default CodeUserCallback;
