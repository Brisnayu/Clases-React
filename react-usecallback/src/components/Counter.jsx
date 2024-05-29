import React, {useState, useCallback} from 'react';
import Button from './Button';

const Counter = () => {
    console.log("counter rendered");

    const [countOne, setCountOne] = useState(0);
    const [countTwo, setCountTwo] = useState(0);

    const memoizedSetCountOne = useCallback(() => setCountOne(countOne + 1), [countOne]);
    const memoizedSetCountTwo = useCallback(() => setCountTwo(countTwo + 2), [countTwo]);

    return (
        <div>
            <h3>{countOne} || {countTwo}</h3>
            <Button handleClick={memoizedSetCountOne} name="button + 1"/>
            <Button handleClick={memoizedSetCountTwo} name="button + 2" />
        </div>
    )
}

export default Counter;