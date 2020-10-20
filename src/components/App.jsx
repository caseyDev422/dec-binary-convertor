import React, { useState } from "react";

function App(props) {
  const [count, setCount] = useState("");
  const [decCount, setDecCount] = useState(0);
  const [binary, setBinary] = useState(0);

  function increase() {
    setDecCount(decCount + 1);
  }

  function plusTen() {
    setDecCount(decCount + 10);
  }

  function plusTwnety() {
    setDecCount(decCount + 20);
  }

  function plusHundred() {
    setDecCount(decCount + 100);
  }

  function plusThousand() {
    setDecCount(decCount + 1000);
  }

  function decToBinary(e) {
    var binaryDigit = e.target.value;
    var parsedBinary = parseInt(binaryDigit, 2);
    setCount("");
    setBinary(parsedBinary);
  }

  function binaryToDec() {
    setDecCount(decCount.toString(2));
  }

  function plusFive() {
    setDecCount(decCount + 5);
  }

  function resetBinary() {
    setBinary(0);
  }

  function reset() {
    setDecCount(0);
  }

  function inputDecimal(e) {
    setCount(e.target.value);
  }

  return (
    <>
      <div className="header">
        <div className="container-fluid">
          <div className="container">
            <div className="calc-container">
              <h2>Binary to Decimal</h2>
              <h1>{binary}</h1>
              <input
                onChange={inputDecimal}
                type="number"
                placeholder="Enter Binary Number"
                value={count}
              />
              <button onClick={decToBinary} value={count}>
                conv
              </button>
              <button onClick={resetBinary}>reset</button>
            </div>
          </div>
          <div className="container">
            <div className="calc-container">
              <h2>Decimal to Binary</h2>
              <h1>{decCount}</h1>
              <button onClick={increase} value={decCount}>
                +1
              </button>
              <button onClick={plusFive} value={decCount}>
                +5
              </button>
              <button onClick={plusTen} value={decCount}>
                +10
              </button>
              <button onClick={plusTwnety} value={decCount}>
                +20
              </button>
              <button onClick={plusHundred} value={decCount}>
                +100
              </button>
              <button onClick={plusThousand} value={decCount}>
                +1000
              </button>
              <button onClick={binaryToDec} value={decCount}>
                conv
              </button>
              <button onClick={reset} value={decCount}>
                reset
              </button>
            </div>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    </>
  );
}

export default App;
