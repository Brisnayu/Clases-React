import BasicAvatar from "./components/BasicAvatar";
import BasicButtonGroup from "./components/BasicButtonGroup";
import BasicButtons from "./components/BasicButtons";
import HoverRating from "./components/BasicRating";
import BasicSwitch from "./components/BasicSwitch";
import BasicTable from "./components/BasicTable";
import OtherRating from "./components/OtherRating";

function App() {
  return (
    <>
      <BasicAvatar />
      <br />
      <BasicButtons />
      <br/>
      <BasicButtonGroup />
      <br />
      <HoverRating />
      <br />
      <OtherRating />
      <hr />
      <BasicSwitch />
      <hr />
      <BasicTable />
    </>
  );
}

export default App;
