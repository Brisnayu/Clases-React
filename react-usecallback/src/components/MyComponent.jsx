import React, { useCallback } from "react";
import ChildComponent from "./ChildComponent";

const MyComponent = ({ prop }) => {
  const callback = () => {
    return "Result";
  };

  const memoizedCallback = useCallback(callback, [prop]);

  return <ChildComponent callback={memoizedCallback} />;
};

export default MyComponent;
