import React from "react";

const HeroeDetail = ({ heroe }) => {
  return (
    <>
      <h3>name: {heroe.nombre}</h3>
      <p>alias: {heroe.alias}</p>
      <p>edad: {heroe.edad}</p>
    </>
  );
};

export default HeroeDetail;
