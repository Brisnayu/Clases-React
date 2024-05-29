import { useState } from "react";


const valueInput = () => {
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
  
    console.log("Que día fue ayer:", ayer);
}

export default valueInput;