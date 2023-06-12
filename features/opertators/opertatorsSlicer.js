import { createSlice } from "@reduxjs/toolkit";
import numbersSlicer from "../numbers/numbersSlicer";

const initialState = {
  numbers: numbersSlicer.s,
  currentOperator: "",
};

const operatorsSlice = createSlice({
  name: "operators",
  initialState,
  reducers: {
    sum: (state) => {
      console.log("🚀 ~ file: numbersSlicer.js:35 ~ state.numbers:", state.numbers);
      const takenSetFromScreen = [state.numbers.numbersOnScreen, "+"];
      state.overAllEquation = [...state.numbers.overAllEquation, ...takenSetFromScreen];
      (state.numbersSetNo1 = state.numbers.numbersOnScreen),
        (state.numbers.currentOperation = "+"),
        (state.numbers.numbersOnScreen = "0"),
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

export default operatorsSlice.reducer;
export const { sum, equal, subtract, product, divide } = operatorsSlice.actions;
