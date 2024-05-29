import useToggle from "../hooks/useToggle";

const Toggleable = () => {
  const [toggleState, handleToggle] = useToggle();

  return (
    <>
      <h3>Toggl: {toggleState.toString()}</h3>
      <button onClick={handleToggle}>Toggle</button>
    </>
  );
};

export default Toggleable;
