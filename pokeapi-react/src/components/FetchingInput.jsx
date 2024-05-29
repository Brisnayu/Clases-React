import React, { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import "./FetchingInput.css";


const FetchingInput = () => {
  const [filter, setFilter] = useState("chikorita");
  const [debounceFilter] = useDebounce(filter, 500);
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const getPokemonFiltered = async () => {
      const pokemon = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${filter}`
      );
      const pokemonJson = await pokemon.json();

      return {
        ...pokemonJson,
        name: pokemonJson.name,
        id: pokemonJson.id,
        image: pokemonJson.sprites.other.dream_world.front_default,
        image1: pokemonJson.sprites.other["official-artwork"].front_default,
        // image2: pokemonJson.sprites.other["official-artwork"].front_shiny,
      };
    };

    getPokemonFiltered().then((pokemon) => setPokemon([pokemon]));
  }, [debounceFilter]);

  return (
    <>
      <h1>POKEAPI DESDE REACT</h1>

      <input
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      />

      <div className="card-pokemon">
        {pokemon.map((pokemon) => (
          <div key={pokemon.id}>
            <h2>{pokemon.name.toUpperCase()}</h2>
            <img src={pokemon.image} alt={pokemon.name} />
            <img src={pokemon.image1} alt={pokemon.name} />
            {/* <img src={pokemon.image2} alt={pokemon.name} /> */}
          </div>
        ))}
        <button>Hola!</button>

      </div>
    </>
  );
};

export default FetchingInput;
