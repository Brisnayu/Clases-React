import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h2>Home Page</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus saepe
        maiores quia! Molestiae consequatur quidem alias natus itaque tempora
        molestias enim numquam corrupti hic quae, impedit quas deleniti nobis
        ipsum.
      </p>

      <p>
        <span>Visita la página de Héroes🦹🏼‍♂️</span>
        <Link to="heroes">Heroes</Link>
      </p>
    </>
  );
};

export default Home;
