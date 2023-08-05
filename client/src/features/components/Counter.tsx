import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { increment, decrement, setValue } from "../slices/counter";

export const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <>
      <h1>{count}</h1>
      <button onClick={(e) => dispatch(increment())}>Increment</button>
      <button onClick={(e) => dispatch(decrement())}>Decrement</button>
    </>
  );
};
