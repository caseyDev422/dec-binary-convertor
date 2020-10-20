import React, { useState } from "react";

function App(props) {
  const [count, setCount] = useState(0);
  const [binary, setBinary] = useState(0);

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

  // const [decimal, setDecimal] = useState(0);

  // function Binary() {
  //   const [decimal, setDecimal] = useState(0);
  //   const decimalBinary = (
  //     <>
  //       <h1>{decimal}</h1>
  //       <input
  //         value={decimal}
  //         onChange={(e) => setDecimal(e.target.value)}
  //         type="number"
  //       />
  //     </>
  //   );
  //   return [decimalBinary, decimal];
  // }

  // function binaryConvert() {
  //   setDecimal(decimal.toString(2));
  // }

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

  function increaseTen() {
    setCount(count + 10);
  }

  function increaseNine() {
    setCount(count + 10);
  }

  function increaseHundred() {
    setCount(count + 100);
  }

  function increaseHundredOne() {
    setCount(count + 101);
  }

  function decrease() {
    setCount(count - 1);
  }

  function decToBinary(e) {
    var binaryDigit = e.target.value;
    var parsedBinary = parseInt(binaryDigit, 2);
    setCount("");
    setBinary(parsedBinary);
  }

  function binaryToDec() {
    setCount(count.toString(2));
  }

  function plusZero() {
    setCount(count * 10);
  }

  function plusOne() {
    setCount(count + 0 + 1);
  }

  function resetBinary() {
    setBinary(0);
  }

  function reset() {
    setCount(0);
  }

  function inputDecimal(e) {
    setCount(e.target.value);
  }

  return (
    <>
      <div className="container">
        <h2>Binary to Decimal</h2>
        <h1>{binary}</h1>
        <input
          onChange={inputDecimal}
          type="number"
          placeholder="Enter base10 Number"
          value={count}
        />
        <button onClick={decToBinary} value={count}>
          conv
        </button>
        <button onClick={resetBinary}>reset</button>
      </div>
      <div className="container">
        <h2>Decimal to Binary</h2>
        <h1>{count}</h1>
        <button onClick={plusOne}>+1</button>
        <button onClick={plusZero}>+0</button>
        <button onClick={increaseNine}>+10</button>
        <button onClick={increaseHundredOne}>+101</button>
        <button onClick={binaryToDec}>conv</button>
        <button onClick={reset}>reset</button>
      </div>
      <useInput />
      {/* <div className="container">
        <h3>Decimal - Binary</h3>
        <Binary />
        <button onClick={binaryConvert}>=</button>
      </div> */}
    </>
  );
}

export default App;
