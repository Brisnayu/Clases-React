import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Fecha from "./Fecha";

const CharacterList = () => {
  const [characterList, setCharacterList] = useState([]);

  const today = new Date(Date.now()).toISOString().slice(0, 10);
  const [date, setDate] = useState(today);

  let ayer;
  const hoy = new Date();
  const day = hoy.getDate() - 1;
  const month = hoy.getMonth() + 1;
  const year = hoy.getFullYear();

  if (month < 10) {
    ayer = `${year}-0${month}-${day}`;
  }

  console.log(date);

  useEffect(() => {
    (async () => {
      const data = await fetch(
        "https://rickandmortyapi.com/api/character"
      ).then((response) => response.json());
      setCharacterList(data.results);
    })();
  }, []);

  // console.log(characterList);
  const buttonPrueba = [];
  const crearBotones = () => {
    characterList.forEach((character) => {
      if (!buttonPrueba.includes(character.status)) {
        buttonPrueba.push(character.status);
      }
    });

    // console.log("aquí está el array", buttonPrueba);
  };
  crearBotones();

  return (
    <>
    <Fecha date={date} today={today} />
      <h1>Listado de personajes de Rick and Morty</h1>
      <select
        name=""
        id="changeApi"
        onChange={(event) =>
          event.target.value === "today" ? 
          setDate(today) : setDate(ayer)
        }
      >
        <option value="-">Nada!</option>
        <option value="today">Fecha de hoy</option>
        <option value="yesterday">Fecha de ayer</option>
      </select>
      <div>
        {characterList
          ? buttonPrueba.map((button) => <button>{button}</button>)
          : "esperar"}
      </div>
      {characterList.map((character) => (
        <Card key={character.id} character={character} />
      ))}
      <div></div>
    </>
  );
};

export default CharacterList;
