const PruebaFunction = () => {
  const sum = () => {
    const num1 = 2;
    const num2 = 3;

    return num1 + num2;
  };

  //   console.log(sum());

  const ubicacion = navigator.geolocation.getCurrentPosition((position) => {
    // console.log(position.coords.latitude.toFixed(2));
    //   console.log(position.coords.longitude.toFixed(2));
    //   return setLatitud(position.coords.latitude.toFixed(2));
    //   setLongitud(position.coords.longitude.toFixed(2));
  });

  //   console.log(ubicacion);

//   const lat = navigator.geolocation.getCurrentPosition((position) => console.log(position.coords.latitude.toFixed(2)));

  return <h2>HOLA DESDE PRUEBA FUNCTION</h2>;
};

export default PruebaFunction;
