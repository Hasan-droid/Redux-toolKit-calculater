import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numbersOnScreen: "0",
  numbersSetNo1: 0,
  saved: 0,
  currentOperation: "",
  overAllEquation: [],
};

const updateState = (state, action) => {
  console.log("state /\\", state, "action/\\", action);
  if (state === "0") {
    return action === "." ? state + action : action;
  } else if (state.includes(".")) {
    return action === "." ? state : state + action;
  } else {
    return state + action;
  }
};

const numbersSlice = createSlice({
  name: "numbers",
  initialState,
  reducers: {
    addNumber: (state, action) => {
      state.numbersOnScreen = updateState(
        state.numbersOnScreen.toString(),
        action.payload.toString()
      );
    },
    clear: () => initialState,
  },
});

export default numbersSlice.reducer;
export const { addNumber, clear, sum, equal, subtract, product, divide } = numbersSlice.actions;
