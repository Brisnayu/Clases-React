import React from "react";
import { UiButton } from "../styles/components/UiButton";

const Button = ({ action }) => {

    console.log("hola")

  return <UiButton onClick={action}>Theme</UiButton>;
};

export default Button;
