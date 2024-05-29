import { useCounter } from "../hooks/useCounter";

const Decrement = () => {
  const { count, handleDecrement } = useCounter(10);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleDecrement}>-</button>
    </>
  );
};

export default Decrement;