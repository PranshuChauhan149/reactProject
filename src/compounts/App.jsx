import style from "./App.module.css";
import Display from "./compounts/display";
import ButtonCon from "./compounts/Buttons";
import { useState } from "react";
import Heading from "./compounts/heading";

function App() {
  const [calVal, setVal] = useState("");

  const onButtonclick = (b) => {
    if (b === "C") {
      setVal("");
    } else if (b === "=") {
      const result = eval(calVal);
      setVal(eval(result));
    } else {
      const newDisplayValue = calVal + b;
      setVal(newDisplayValue);
    }
  };

  return (
    <div className={style.Maincontainer}>
      <Heading></Heading>
      <div className={style.container}>
        <Display displayvalue={calVal}></Display>

        <ButtonCon onbut={(b) => onButtonclick(b)}></ButtonCon>
      </div>
    </div>
  );
}

export default App;
