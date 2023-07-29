import React from "react";
import { readonlyprops } from "types/readonlyprops";

type proto = {
  id: number;
  name: string;
  isCool: boolean;
};

type readOnlyComponentProps = readonlyprops<proto>;

function App() {
  function coolCoponent(props: readOnlyComponentProps) {
    return <>{props.id}</>;
  }
  return <div>App</div>;
}

export default App;
