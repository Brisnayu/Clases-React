import { useState, useEffect } from "react";

const PruebaFetch = () => {

const [latitud, setLatitud] = useState(0)
const [longitud, setLongitud] = useState(0)
    
    navigator.geolocation.getCurrentPosition((position) => {
    //   console.log(position.coords.latitude.toFixed(2));
    //   console.log(position.coords.longitude.toFixed(2));
      setLatitud(position.coords.latitude.toFixed(2));
      setLongitud(position.coords.longitude.toFixed(2));
    });

    console.log("este es el useState, latitud", latitud)
    console.log("este el useState, longitud", longitud)

    const hours = new Date().toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"});
    const today = new Date().toLocaleDateString([], {year: "numeric", month: "short", day: "numeric"});
const [weatherData, setWeatherData] = useState([]);
    // console.log(hours)
    // console.log(today)
    


    const WEATHER_API_KEY = "dfad8d7ba7c96049c80872a31938271f";
    const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${WEATHER_API_KEY}`;
  
    useEffect(() => {
      if (longitud === 0) {
        return;
      } else {
        const fetchData = async () => {
          const data = await fetch(WEATHER_API);
          const dataJSON = await data.json();
          setWeatherData(dataJSON);
          console.log("ESTOY DENTRO DEL FETCH");
        };
        fetchData();
      }
    }, [latitud]);

    console.log("new array", weatherData)
    // const img = weatherData.weather[0].icon

  return (
    <>
      <h1>HOLA DESDE LA PRUEBA</h1>
      {/* <p>{weatherData.name}</p>
      <p>{weatherData.weather[0].icon}</p> */}
    </>
  );
};

export default PruebaFetch;

//   let lat;
//   let lon;

//   const direction = () => {
//     navigator.geolocation.getCurrentPosition((position) => {
//       console.log(position.coords.latitude.toFixed(2));
//       console.log(position.coords.longitude.toFixed(2));
//     });
//   };

//   direction();

//   console.log(lat)
//   console.log(lon)
