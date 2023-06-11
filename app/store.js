import { configureStore } from "@reduxjs/toolkit";
import numbersSlicer from "../features/numbers/numbersSlicer";

const store = configureStore({
  reducer: {
    numbers: numbersSlicer,
  },
});

export default store;
