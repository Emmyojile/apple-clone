import { useState, useEffect, useRef } from "react";


export const MyRef = () => {
  //used to track application renders
    const [inputValue, setInputValue] = useState("");
    const count = useRef(2);
    useEffect(() => {
      count.current = count.current + 2;
    });


    //used to access dom elements
    const inputElement = useRef();
    const focusInput = () => {
      inputElement.current.focus();
    };

  //used in Tracking State Changes
  const [inputTrackValue, setInputTrackValue] = useState("");
  const previousInputTrackValue = useRef("");

  useEffect(() => {
    previousInputTrackValue.current = inputTrackValue;
  }, [inputTrackValue]);

  
  return (
    <div className="min-h-screen w-full text-green-500">
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      className="text-black"
    />
    <h1>Render Count: {count.current}</h1>
      <br />
      <br />
      <br />
    <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
      <br />
      <br />
      <br />
      <input
        type="text"
        value={inputTrackValue}
        onChange={(e) => setInputTrackValue(e.target.value)}
      />
      <h2>Current Value: {inputTrackValue}</h2>
      <h2>Previous Value: {previousInputTrackValue.current}</h2>

  </div>
  )
}
