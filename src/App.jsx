import { useState } from "react";
import ButtonPad from "./ButtonPad";

const App = () => {
  const [expression, setExpression] = useState("");
  const [display, setDisplay] = useState("");

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center outer">
      <div
        id="calculator"
        className="container-fluid bg-body-secondary d-flex flex-column border border-secondary border-5 m-0 p-0"
      >
        <div id="screen" className="col-12 d-flex flex-column">
          <Exp expression={expression} />
          <Disp display={display} />
        </div>
        <ButtonPad
          expression={expression}
          setExpression={setExpression}
          setDisplay={setDisplay}
          display={display}
        />
      </div>
    </div>
  );
};
export default App;

const Exp = ({ expression }) => {
  return (
    <>
      <div id="expression" className="bg-secondary-subtle">
        <p className="h-100 d-flex justify-content-end align-items-center p-2 flex-wrap">
          {expression}
        </p>
      </div>
    </>
  );
};

const Disp = ({ display }) => {
  return (
    <>
      <div id="display" className="bg-light">
        <p className="h-100 d-flex justify-content-end align-items-center p-2 flex-wrap">
          {display}
        </p>
      </div>
    </>
  );
};
