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
    sum: (state) => {
      console.log("🚀 ~ file: numbersSlicer.js:35 ~ overAllEquation:", state.overAllEquation);
      const takenSetFromScreen = [state.numbersOnScreen, "+"];
      state.overAllEquation = [...state.overAllEquation, ...takenSetFromScreen];
      (state.numbersSetNo1 = state.numbersOnScreen),
        (state.currentOperation = "+"),
        (state.numbersOnScreen = "0"),
        console.log("🚀 ~ file: numbersSlicer.js:38 ~ overAllEquation:", state.overAllEquation);
    },
    subtract: (state) => {
      const takenSetFromScreen = [state.numbersOnScreen, "-"];
      state.overAllEquation = [...state.overAllEquation, ...takenSetFromScreen];
      state.numbersSetNo1 = state.numbersOnScreen;
      state.currentOperation = "-";
      state.numbersOnScreen = "0";
    },
    divide: (state) => {
      const takenSetFromScreen = [state.numbersOnScreen, "/"];
      state.overAllEquation = [...state.overAllEquation, ...takenSetFromScreen];
      state.currentOperation = "/";
      state.numbersSetNo1 = state.numbersOnScreen;
      state.numbersOnScreen = "0";
    },
    product: (state) => {
      const takenSetFromScreen = [state.numbersOnScreen, "*"];
      state.overAllEquation = [...state.overAllEquation, ...takenSetFromScreen];
      (state.numbersSetNo1 = state.numbersOnScreen), (state.numbersOnScreen = "0");
      state.currentOperation = "*";
    },
    equal: (state) => {
      console.log("🚀 ~ file: numbersSlicer.js:63 ~ numbersOnScreen:", state.numbersOnScreen);
      console.log("🚀 ~ file: numbersSlicer.js:64 ~ overAllEquation:", state.overAllEquation);
      const result = eval(
        [...state.overAllEquation, state.numbersOnScreen]
          .join("")
          .replace("/(+|-|*|/)(+-*/)/g", "$2")
          .replace("/(-)(d)/g", "$1 $2")
          .replace("/(-)s(d)", "-$2")
      );
      const finalResult = /\.\d{4,}/.test(result) ? result.toFixed(4) : result;
      console.log("finalResult", finalResult);

      state.numbersOnScreen = finalResult;
      state.overAllEquation = [finalResult];
      state.saved =
        state.saved === 0
          ? Number(state.numbers1) + Number(state.state)
          : Number(state.saved) + Number(state.state);
    },
  },
});

export default numbersSlice.reducer;
export const { addNumber, clear, sum, equal, subtract, product, divide } = numbersSlice.actions;
