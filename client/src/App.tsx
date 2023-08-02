import React, { ReactPropTypes } from "react";
import "./styles/App.css";
import { useAppDispatch, useAppSelector } from "./hooks";
import { decrement, increment } from "./features/counter";
import { BEM } from "./components/BEM";
import { CoolButton } from "./components/CoolButton";

const App = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <>
      <BEM />
      <CoolButton text="Click me!" message="Fuuny!" colors={["red", "blue"]} />
      <span>{count}</span>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
    </>
  );
};

export default App;
