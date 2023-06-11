import { useDispatch, useSelector } from "react-redux";
import { addNumber } from "./numbersSlicer";
export const NumbersView = () => {
  const appState = useSelector((state) => state.numbers);
  const Dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    switch (e.target.id) {
      //   case "clear":
      //     return this.props.clearResults();
      case "one":
        return Dispatch(addNumber(1));
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
      //   case "add":
      //     return this.props.sumNumber();
      //   case "subtract":
      //     return this.props.subNumber();
      //   case "multiply":
      //     return this.props.prdNumber();
      //   case "divide":
      //     return this.props.divNumber();
      //   case "equals":
      //     return this.props.equalNumber();
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
        {this.appState.result}
      </div>
      <div className="center">
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
        </div>
        <div>
          <button id="zero" onClick={(e) => handleClick(e)}>
            0
          </button>
        </div>

        {/* <div>
            <button id="equals" onClick={(e) => this.handleClick(e)}>
              =
            </button>
            <button id="add" onClick={(e) => this.handleClick(e)}>
              +
            </button>
            <button id="subtract" onClick={(e) => this.handleClick(e)}>
              -
            </button>
            <button id="multiply" onClick={(e) => this.handleClick(e)}>
              *
            </button>
            <button id="divide" onClick={(e) => this.handleClick(e)}>
              /
            </button>
            <button id="decimal" onClick={(e) => this.handleClick(e)}>
              .
            </button>
            <button id="clear" onClick={(e) => this.handleClick(e)}>
              AC
            </button>
          </div> */}
      </div>
    </>
  );
};
