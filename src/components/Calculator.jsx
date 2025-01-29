import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const maxChar = 15

  const handleClick = (value) => {
    if (input.length >= maxChar ) {
      alert('Maximum character limit reached.')
    } else {
      setInput((prev) => prev + value);
    }

  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      if (input) {
        setResult(eval(input)); 
      }
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="background">
      <div className="calculator">
        <div className="display">
          <div className="input">{input}</div>
          <div className="result">{result}</div>
        </div>
        <table>
          <tbody>
            <tr>
              <td>
                <button className="symbol-btn" onClick={handleDelete}>
                  <i className="bx bxs-tag-x"></i>
                </button>
              </td>
              <td>
                <button className="symbol-btn" onClick={handleClear}>
                  CE
                </button>
              </td>
              <td>
                <button
                  className="symbol-btn"
                  onClick={() => {
                    handleClick("%");
                  }}
                >
                  %
                </button>
              </td>
              <td>
                <button
                  className="operator-btn"
                  onClick={() => {
                    handleClick("/");
                  }}
                >
                  /
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button
                  onClick={() => {
                    handleClick("7");
                  }}
                >
                  7
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    handleClick("8");
                  }}
                >
                  8
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    handleClick("9");
                  }}
                >
                  9
                </button>
              </td>
              <td>
                <button
                  className="operator-btn"
                  onClick={() => {
                    handleClick("*");
                  }}
                >
                  x
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button
                  onClick={() => {
                    handleClick("4");
                  }}
                >
                  4
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    handleClick("5");
                  }}
                >
                  5
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    handleClick("6");
                  }}
                >
                  6
                </button>
              </td>
              <td>
                <button
                  className="operator-btn"
                  onClick={() => {
                    handleClick("-");
                  }}
                >
                  -
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button
                  onClick={() => {
                    handleClick("1");
                  }}
                >
                  1
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    handleClick("2");
                  }}
                >
                  2
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    handleClick("3");
                  }}
                >
                  3
                </button>
              </td>
              <td>
                <button
                  className="operator-btn"
                  onClick={() => {
                    handleClick("+");
                  }}
                >
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button
                  onClick={() => {
                    handleClick("0");
                  }}
                >
                  0
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    handleClick(".");
                  }}
                >
                  .
                </button>
              </td>
              <td rowSpan={2}>
                <button className="operator-btn" onClick={handleCalculate}>
                  =
                </button>
              </td>
              <td>
                <button className="special-btn" onClick={() => alert("Thank you for visiting my project! ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧")}>
                  <i className="bx bx-heart-circle"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Calculator;
