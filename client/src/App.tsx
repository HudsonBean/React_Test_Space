import React from "react";

type dessert =
  | { kind: "Cookie"; type: "Chocolate" | "Raisins" }
  | {
      kind: "Ice-cream";
      flavor: "Chocolate" | "Vanilla";
      topping: "Gummy-bears" | "Chocolate-chips";
    };

let a: dessert = {
  kind: "Cookie",
  type: "Chocolate",
};
let b: dessert = {
  kind: "Ice-cream",
  flavor: "Chocolate",
  topping: "Gummy-bears",
};
let c: Omit<dessert, "type"> = {
  kind: "Cookie",
};

function App() {
  return <div>App</div>;
}

export default App;
