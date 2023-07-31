import React, { ReactPropTypes } from "react";
import "./styles/App.css";
import { BEM } from "./components/BEM";
import { CoolButton } from "./components/CoolButton";

const App = () => {
  return (
    <>
      <BEM />
      <CoolButton text="Click me!" message="Fuuny!" colors={["red", "blue"]} />
    </>
  );
};

export default App;
