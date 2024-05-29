let heroes = [
  {
    id: 1,
    nombre: "Spider-Man",
    edad: 20,
    alias: "Peter Parker",
  },
  {
    id: 2,
    nombre: "Iron Man",
    edad: 45,
    alias: "Tony Stark",
  },
  {
    id: 3,
    nombre: "Wonder Woman",
    edad: 30,
    alias: "Diana Prince",
  },
  {
    id: 4,
    nombre: "Captain America",
    edad: 100,
    alias: "Steve Rogers",
  },
  {
    id: 5,
    nombre: "Black Widow",
    edad: 35,
    alias: "Natasha Romanoff",
  },
];

export const getHeroes = () => heroes;

export const getHeroe = (id) =>
  heroes.find((heroe) => heroe.id.toString() === id);

export const deleteHeroe = async (id) =>
  (heroes = heroes.filter((heroe) => heroe.id !== id));
