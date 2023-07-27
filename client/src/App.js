import React from "react";

function App() {
  //Variables

  //Functions
  function clickMeHandler(x) {
    return (e) => {
      e.target.style.color = x;
    };
  }

  //Components
  function ClickMe({ onTap, children }) {
    return <h1 onClick={onTap}>{children}</h1>;
  }

  return (
    <>
      <ClickMe onTap={clickMeHandler("red")}>Click Me</ClickMe>
    </>
  );
}

export default App;
