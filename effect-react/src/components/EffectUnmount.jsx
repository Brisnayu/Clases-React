import React, { useState } from "react";
import MessageComponent from "./MessageComponent";

const EffectUnmount = () => {

    const [visible, setVisible] = useState(false);

    return (
        <>
            <h2>Hola desde Effect Unmount</h2>

            {visible && <MessageComponent />}
            <button onClick={() => setVisible(!visible)}>¿Estás aquí?</button>
        </>
    )
}

export default EffectUnmount