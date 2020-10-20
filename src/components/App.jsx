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

  function increaseTen() {
    setCount(count + 10);
  }

  function increaseHundred() {
    setCount(count + 100);
  }

  function decrease() {
    setCount(count - 1);
  }

  function decToBinary() {
    setCount(count.toString(2));
  }

  function binaryToDec() {
    var countInt = count;
    var digit = parseInt(countInt, 2);
    setCount(digit);
  }

  function reset() {
    setCount(0);
  }

  return (
    <>
      <div className="container">
        <h2>Decimal to Binary</h2>
        <h1>{count}</h1>
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
        <button onClick={increaseTen}>+10</button>
        <button onClick={increaseHundred}>+100</button>
        <button onClick={decToBinary}>conv</button>
        <button onClick={reset}>reset</button>
      </div>
      <div className="container">
        <h2>Binary to Decimal</h2>
        <h1>{count}</h1>
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
        <button onClick={increaseTen}>+10</button>
        <button onClick={increaseHundred}>+100</button>
        <button onClick={binaryToDec}>conv</button>
        <button onClick={reset}>reset</button>
      </div>
      {/* <div className="container">
        <h3>Decimal - Binary</h3>
        <Binary />
        <button onClick={binaryConvert}>=</button>
      </div> */}
    </>
  );
}

export default App;
