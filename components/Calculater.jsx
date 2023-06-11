class Project extends React.Component {
  constructor(props) {
    super(props);
    console.log("REACT PROPS", props);
    this.state = {
      result: this.props.reduxState.state,
    };
  }
  handleClick(e) {
    e.preventDefault();
    switch (e.target.id) {
      //    case 'clear':return this.props.clearResults();
      case "one":
        return this.props.addNumber(1);
      case "two":
        return this.props.addNumber(2);
      case "three":
        return this.props.addNumber(3);
      case "four":
        return this.props.addNumber(4);
      case "five":
        return this.props.addNumber(5);
      case "six":
        return this.props.addNumber(6);
      case "seven":
        return this.props.addNumber(7);
      case "eight":
        return this.props.addNumber(8);
      case "nine":
        return this.props.addNumber(9);
      case "zero":
        return this.props.addNumber(0);
      //       case 'decimal':return this.props.addNumber('.')
      //      case 'add':return this.props.sumNumber()
      //       case 'subtract':return this.props.subNumber()
      //       case 'multiply':return this.props.prdNumber()
      //       case 'divide':return this.props.divNumber()
      //      case 'equals':return this.props.equalNumber()
      //    default : return ''
    }
  }
  componentWillReceiveProps(nextprops) {
    console.log("new props will come", nextprops);
    this.setState({
      result: nextprops.reduxState.state,
    });
  }
  render() {
    return (
      <>
        <div id="display" className="numbers">
          {this.state.result}
        </div>
        <div className="center">
          <div>
            <button id="one" onClick={(e) => this.handleClick(e)}>
              1
            </button>
            <button id="two" onClick={(e) => this.handleClick(e)}>
              2
            </button>
            <button id="three" onClick={(e) => this.handleClick(e)}>
              3
            </button>
          </div>
          <div>
            <button id="four" onClick={(e) => this.handleClick(e)}>
              4
            </button>
            <button id="five" onClick={(e) => this.handleClick(e)}>
              5
            </button>
            <button id="six" onClick={(e) => this.handleClick(e)}>
              6
            </button>
          </div>
          <div>
            <button id="seven" onClick={(e) => this.handleClick(e)}>
              7
            </button>
            <button id="eight" onClick={(e) => this.handleClick(e)}>
              8
            </button>
            <button id="nine" onClick={(e) => this.handleClick(e)}>
              9
            </button>
          </div>
          <div>
            <div class="col col-lg-6">
              <button id="zero" onClick={(e) => this.handleClick(e)}>
                0
              </button>
            </div>
          </div>

          <div>
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
          </div>
        </div>
      </>
    );
  }
}
