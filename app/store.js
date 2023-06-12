import { configureStore } from "@reduxjs/toolkit";
import numbersSlicer from "../features/numbers/numbersSlicer";
import operatorsSlicer from "../features/opertators/opertatorsSlicer";

const store = configureStore({
  reducer: {
    numbers: numbersSlicer,
    operators: operatorsSlicer,
  },
});

export default store;
