import { Eval, checkConditions } from "./Func";

const ButtonPad = ({
  inputDisplay,
  setInputDisplay,
  outputDisplay,
  setOutputDisplay,
}) => {
  let output;
  let operators = ["/", "x", "+", "-"];

  // Handle Clear
  const handleClear = () => {
    setInputDisplay("");
    setOutputDisplay("");
  };
  // Handle Num Input

  const handleClick = (e) => {
    let newKey = e.currentTarget.textContent;

    setInputDisplay((prevValue) => {
      if (outputDisplay && operators.includes(newKey)) {
        prevValue = outputDisplay;
      }

      let checked = checkConditions(prevValue, newKey);
      if (checked) {
        return checked;
      }
      let newValue = prevValue + newKey;

      return newValue;
    });
  };

  // Handle Equals Output
  const handleEquals = () => {
    if (inputDisplay) {
      output = Eval(inputDisplay);
      console.log(output, typeof output);
      setOutputDisplay(output);
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
          onClick={handleClick}
          id="divide"
          className="col-3"
        >
          /
        </button>
        <button
          type="button"
          onClick={handleClick}
          id="multiply"
          className="col-3"
        >
          x
        </button>
      </div>
      <div className="row button-row">
        <button
          type="button"
          onClick={handleClick}
          id="seven"
          className="col-3"
        >
          7
        </button>
        <button
          type="button"
          onClick={handleClick}
          id="eight"
          className="col-3"
        >
          8
        </button>
        <button type="button" onClick={handleClick} id="nine" className="col-3">
          9
        </button>
        <button
          type="button"
          onClick={handleClick}
          id="subtract"
          className="col-3"
        >
          -
        </button>
      </div>
      <div className="row button-row">
        <button type="button" onClick={handleClick} id="four" className="col-3">
          4
        </button>
        <button type="button" onClick={handleClick} id="five" className="col-3">
          5
        </button>
        <button type="button" onClick={handleClick} id="six" className="col-3">
          6
        </button>
        <button type="button" onClick={handleClick} id="add" className="col-3">
          +
        </button>
      </div>
      <div className="row button-row-double">
        <div className="col-9 ">
          <div className="row button-row-inner">
            <button
              type="button"
              onClick={handleClick}
              id="one"
              className="col-4"
            >
              1
            </button>
            <button
              type="button"
              onClick={handleClick}
              id="two"
              className="col-4"
            >
              2
            </button>
            <button
              type="button"
              onClick={handleClick}
              id="three"
              className="col-4"
            >
              3
            </button>
          </div>
          <div className="row button-row-inner">
            <button
              type="button"
              onClick={handleClick}
              id="zero"
              className="col-8"
            >
              0
            </button>
            <button
              type="button"
              onClick={handleClick}
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
