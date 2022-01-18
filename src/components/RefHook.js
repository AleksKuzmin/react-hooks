import { useRef } from "react";

const RefHook = () => {
  const inputRef = useRef(null);

  const onClick = () => {
    inputRef.current.value = "";
  };

  return (
    <div>
      <h1> Alex </h1>
      <input type="text" placeholder="Enter ..." ref={inputRef} />
      <button onClick={onClick}> Change name</button>
    </div>
  );
};

export default RefHook;
