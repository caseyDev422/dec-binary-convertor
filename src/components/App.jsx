import React, { useState } from "react";

function App(props) {
  const [count, setCount] = useState(0);

  function useInput() {
    const [count, setCount] = useState(0);
    const input = (
      <input
        value={count}
        onChange={(e) => setCount(e.target.value)}
        type="number"
      />
    );
    return [count, input];
  }

  const [decimal, setDecimal] = useState(0);

  function Binary() {
    const [decimal, setDecimal] = useState(0);
    const decimalBinary = (
      <>
        <h1>{decimal}</h1>
        <input
          value={decimal}
          onChange={(e) => setDecimal(e.target.value)}
          type="number"
        />
      </>
    );
    return [decimalBinary, decimal];
  }

  function binaryConvert() {
    setDecimal(decimal.toString(2));
  }

  // function ResetDecimal() {
  //   const [value, setDecimalZero] = useInput(0);
  //   const input = (
  //     <input
  //       value={value}
  //       type="number"
  //       onChange={(e) => setDecimalZero(e.target.value)}
  //     />
  //   );
  //   return [input, value];
  // }

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  function multiply() {
    setCount(count.toString(2));
  }

  function reset() {
    setCount(0);
  }

  return (
    <>
      <div className="container">
        <h1>{count}</h1>
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
        <button onClick={multiply}>*10</button>
        <button onClick={reset}>0</button>
      </div>
      <div className="container">
        <h3>Decimal - Binary</h3>
        <Binary />
        <button onClick={binaryConvert}>=</button>
      </div>
    </>
  );
}

export default App;
