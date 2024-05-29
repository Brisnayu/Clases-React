import React from "react";
import { useState } from "react";
import CharacterList from "./CharacterList";

const Fecha = ({ date, today }) => {
  // console.log(date)

  return (
    <div>
      <div>
        <input
          type="date"
          value={date}
          max={today}
          min="2020-01-01"
          onInput={(event) => setDate(event.target.value)}
        />
      </div>
    </div>
  );
};

export default Fecha;
