import { configureStore } from "@reduxjs/toolkit";
import features from "./features";

export default configureStore({
  reducer: {
    counter: features.counter,
  },
});
