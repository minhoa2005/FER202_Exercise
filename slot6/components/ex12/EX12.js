import React, { useState } from "react";

export default function EX12() {
  const [count, setCount] = useState(0);
  const [inputText, setInputText] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <div>
        <button onClick={() => setCount(count + 1)}>increment</button>
        <p>Count: {count}</p>
      </div>
      <div>
        <input onChange={(e) => setInputText(e.target.value)} />
        <p>Input text: {inputText}</p>
      </div>
      <div>
        <button onClick={() => setToggle(!toggle)}>
          {toggle ? "Show" : "Hide"}
        </button>
        {toggle && <p>Toggle me!</p>}
      </div>
    </div>
  );
}
