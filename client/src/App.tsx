import React from "react";
import "./styles/App.css";
import { Person } from "./components/Person";

const App = () => {
  return (
    <>
      <Person firstName="John" />
      {/* Example of bem */}
      <div className="test test--dark">
        <div className="test__prototype">Hello</div>
      </div>
    </>
  );
};

export default App;
