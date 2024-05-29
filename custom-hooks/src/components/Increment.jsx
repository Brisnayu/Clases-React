import { useCounter } from "../hooks/useCounter";

const Increment = () => {
  const { count, handleIncrement } = useCounter(0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>+</button>
    </>
  );
};

export default Increment;
