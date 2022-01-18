import react, { useState } from "react";

const StateHooks = () => {
  const [counter, SetCounter] = useState(0);

  const increment = () => {
    SetCounter(counter + 1);
  };

  const [inputValue, SetInputValue] = useState("Pedro");

  const onChange = (event) => {
    const inputValue = event.target.value;
    SetInputValue(inputValue);
  };

  const [isOn, SetIsOn] = useState(false)
 

   const toggle = () => {
       SetIsOn(!isOn)
   }


  return (
    <div>
      {counter}
      <button onClick={increment}>increment</button>
      <input
        type="text"
        placeholder="enter data ..."
        onChange={onChange}
      />{" "}
      {inputValue}
     <button onClick={toggle}>{isOn? "ON": "OFF"}</button>
    </div>
  );
};

export default StateHooks;
