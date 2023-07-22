import { Eval, checkDecimal } from "./Func";

const ButtonPad = ({ expression, setExpression, display, setDisplay }) => {
  let operators = ["/", "x", "+", "-"];

  // Handle Clear
  const handleClear = () => {
    setExpression("");
    setDisplay("0");
  };
  // Handle Num Input
  const handleNum = (e) => {
    //checking/correction for AC zero
    if (display.length === 1 && display === "0") {
      setDisplay("");
    }
    //checking/correction for single operator
    if (display.length === 1 && operators.includes(display)) {
      setDisplay("");
    }

    let num = e.currentTarget.textContent;
    // console.log(num);
    setDisplay((prevValue) => {
      let checked = checkDecimal(prevValue, num);
      if (checked) {
        return checked;
      }

      let fullNum = prevValue + num;
      return fullNum;
    });
    setExpression((prevValue) => {
      let checked = checkDecimal(prevValue, num);
      if (checked) {
        return checked;
      }
      let fullNum = prevValue + num;
      return fullNum;
    });
  };

  // Handle Operator Input
  const handleOperator = (e) => {
    if (display.length === 1 && display === "0") {
      setDisplay("");
    }
    let operator = e.currentTarget.textContent;

    if (expression.length > 1 && expression.includes("=")) {
      setDisplay(operator);
      setExpression(() => {
        let exp = display + operator;
        return exp;
      });
    } else {
      setDisplay(operator);
      setExpression((prevValue) => {
        let fullExpression = prevValue + operator;
        return fullExpression;
      });
    }
  };

  //Handle Equal To
  const handleEquals = (e) => {
    let equalTo = e.currentTarget.textContent;
    if (expression) {
      let result = Eval(expression);

      setDisplay(result);
      setExpression((prevValue) => {
        let resultExpression = prevValue + equalTo + result;
        return resultExpression;
      });
    }
  };

  return (
    <div className="container-fluid h-100 " id="button-pad">
      <div className="row button-row">
        <button
          type="button"
          onClick={handleClear}
          id="clear"
          className="col-6"
        >
          AC
        </button>
        <button
          type="button"
          onClick={handleOperator}
          id="divide"
          className="col-3"
        >
          /
        </button>
        <button
          type="button"
          onClick={handleOperator}
          id="multiply"
          className="col-3"
        >
          x
        </button>
      </div>
      <div className="row button-row">
        <button type="button" onClick={handleNum} id="seven" className="col-3">
          7
        </button>
        <button type="button" onClick={handleNum} id="eight" className="col-3">
          8
        </button>
        <button type="button" onClick={handleNum} id="nine" className="col-3">
          9
        </button>
        <button
          type="button"
          onClick={handleOperator}
          id="subtract"
          className="col-3"
        >
          -
        </button>
      </div>
      <div className="row button-row">
        <button type="button" onClick={handleNum} id="four" className="col-3">
          4
        </button>
        <button type="button" onClick={handleNum} id="five" className="col-3">
          5
        </button>
        <button type="button" onClick={handleNum} id="six" className="col-3">
          6
        </button>
        <button
          type="button"
          onClick={handleOperator}
          id="add"
          className="col-3"
        >
          +
        </button>
      </div>
      <div className="row button-row-double">
        <div className="col-9 ">
          <div className="row button-row-inner">
            <button
              type="button"
              onClick={handleNum}
              id="one"
              className="col-4"
            >
              1
            </button>
            <button
              type="button"
              onClick={handleNum}
              id="two"
              className="col-4"
            >
              2
            </button>
            <button
              type="button"
              onClick={handleNum}
              id="three"
              className="col-4"
            >
              3
            </button>
          </div>
          <div className="row button-row-inner">
            <button
              type="button"
              onClick={handleNum}
              id="zero"
              className="col-8"
            >
              0
            </button>
            <button
              type="button"
              onClick={handleNum}
              id="decimal"
              className="col-4"
            >
              .
            </button>
          </div>
        </div>
        <div className="col-3">
          <div className="row row-col-1 button-row-innerFull">
            <button type="button" onClick={handleEquals} id="equals">
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ButtonPad;
