import { useDispatch, useSelector } from "react-redux";
import { addNumber, clear, sum, equal, subtract, product, divide } from "./numbersSlicer";
import "./numbers.css";
export const NumbersView = () => {
  const appState = useSelector((state) => state.numbers);
  const Dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    switch (e.target.id) {
      case "clear":
        Dispatch(clear());
        break;
      case "one":
        Dispatch(addNumber(1));
        break;
      case "two":
        return Dispatch(addNumber(2));
      case "three":
        return Dispatch(addNumber(3));
      case "four":
        return Dispatch(addNumber(4));
      case "five":
        return Dispatch(addNumber(5));
      case "six":
        return Dispatch(addNumber(6));
      case "seven":
        return Dispatch(addNumber(7));
      case "eight":
        return Dispatch(addNumber(8));
      case "nine":
        return Dispatch(addNumber(9));
      case "zero":
        return Dispatch(addNumber(0));
      case "decimal":
        return Dispatch(addNumber("."));
      case "add":
        return Dispatch(sum());
      case "subtract":
        return Dispatch(subtract());
      case "multiply":
        return Dispatch(product());
      case "divide":
        return Dispatch(divide());
      case "equals":
        return Dispatch(equal());
      //   default:
      //     return "";
    }
  };
  //   componentWillReceiveProps(nextprops) {
  //     console.log("new props will come", nextprops);
  //     this.setState({
  //       result: nextprops.reduxState.state,
  //     });
  //   }

  return (
    <>
      <div id="display" className="numbers">
        {appState.numbersOnScreen}
      </div>
      <div className="center">
        <div id="firstRow" style={{ marginLeft: "43px" }}>
          <button id="clear" style={{ paddingLeft: "14px" }} onClick={(e) => handleClick(e)}>
            AC
          </button>
          <button id="divide" onClick={(e) => handleClick(e)}>
            /
          </button>
          <button id="multiply" onClick={(e) => handleClick(e)}>
            *
          </button>
        </div>
        <div>
          <button id="one" onClick={(e) => handleClick(e)}>
            1
          </button>
          <button id="two" onClick={(e) => handleClick(e)}>
            2
          </button>
          <button id="three" onClick={(e) => handleClick(e)}>
            3
          </button>
          <button id="subtract" onClick={(e) => handleClick(e)}>
            -
          </button>
        </div>
        <div>
          <button id="four" onClick={(e) => handleClick(e)}>
            4
          </button>
          <button id="five" onClick={(e) => handleClick(e)}>
            5
          </button>
          <button id="six" onClick={(e) => handleClick(e)}>
            6
          </button>
          <button id="add" style={{ paddingRight: "12px" }} onClick={(e) => handleClick(e)}>
            +
          </button>
        </div>
        <div>
          <button id="seven" onClick={(e) => handleClick(e)}>
            7
          </button>
          <button id="eight" onClick={(e) => handleClick(e)}>
            8
          </button>
          <button id="nine" onClick={(e) => handleClick(e)}>
            9
          </button>
          <button id="equals" style={{ paddingRight: "13px" }} onClick={(e) => handleClick(e)}>
            =
          </button>
        </div>
        <div>
          <button id="zero" onClick={(e) => handleClick(e)}>
            0
          </button>
          <button id="decimal" onClick={(e) => handleClick(e)}>
            .
          </button>
        </div>

        {/* <div>
        
        
         
         
           
           
         
          </div> */}
      </div>
    </>
  );
};
