import React, { useState, useEffect } from "react";

const Count = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("useEffect called ran. count is " + count)
    }, [count]); // añadimos las variables que queremos trackear

    return (
        <div>

            <h2>Hola desde mi Contador</h2>

            <h3>Count: {count}</h3>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>

        </div>
    )
}

export default Count;