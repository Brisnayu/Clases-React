import Switch from "@mui/material/Switch";

const BasicSwitch = () => {

    const toggleSwith = () => {
        console.log("Hola, soy el evento change")
    }

  return (
    <>
      <Switch defaultChecked onClick={toggleSwith} />
      <Switch />
      <Switch disabled defaultChecked />
      <Switch disabled />
    </>
  );
};

export default BasicSwitch;
