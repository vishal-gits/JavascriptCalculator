import { useState } from "react";
import ButtonPad from "./ButtonPad";

const App = () => {
  const [inputDisplay, setInputDisplay] = useState("");
  const [outputDisplay, setOutputDisplay] = useState("");

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center outer">
      <div
        id="calculator"
        className="container-fluid bg-body-secondary d-flex flex-column border border-secondary border-5 m-0 p-0"
      >
        <div id="display" className="col-12 d-flex flex-column">
          <Output outputDisplay={outputDisplay} />
          <Input inputDisplay={inputDisplay} />
        </div>
        <ButtonPad
          inputDisplay={inputDisplay}
          setInputDisplay={setInputDisplay}
          setOutputDisplay={setOutputDisplay}
          outputDisplay={outputDisplay}
        />
      </div>
    </div>
  );
};
export default App;

const Output = ({ outputDisplay }) => {
  return (
    <>
      <div id="output" className="bg-secondary-subtle">
        <p className="h-100 d-flex justify-content-end align-items-center p-2 flex-wrap">
          {outputDisplay}
        </p>
      </div>
    </>
  );
};

const Input = ({ inputDisplay }) => {
  // console.log(inputDisplay);
  return (
    <>
      <div id="input" className="bg-light">
        <p className="h-100 d-flex justify-content-end align-items-center p-2 flex-wrap">
          {inputDisplay}
        </p>
      </div>
    </>
  );
};
