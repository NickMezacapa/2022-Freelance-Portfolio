import React, { useState, useEffect } from 'react';
import NumberFormat from 'react-number-format';
import './Calc.css';

const Calc = () => {
    const [preState, setPreState] = useState("");
    const [curState, setCurState] = useState("");
    const [input, setInput] = useState("0");
    const [operator, setOperator] = useState(null);
    const [total, setTotal] = useState(false);
  
    const inputNum = (e) => {
      if (curState.includes(".") && e.target.innerText === ".") return;
  
      if (total) {
        setPreState("");
      }
  
      curState
        ? setCurState((pre) => pre + e.target.innerText)
        : setCurState(e.target.innerText);
      setTotal(false);
    };
  
    useEffect(() => {
      setInput(curState);
    }, [curState]);
  
    useEffect(() => {
      setInput("0");
    }, []);
    const operatorType = (e) => {
      setTotal(false);
      setOperator(e.target.innerText);
      if (curState === "") return;
      if (preState !== "") {
        equals();
      } else {
        setPreState(curState);
        setCurState("");
      }
    };
  
    const equals = (e) => {
      if (e?.target.innerText === "=") {
        setTotal(true);
      }
      let cal;
      switch (operator) {
        case "/":
          cal = String(parseFloat(preState) / parseFloat(curState));
          break;
  
        case "+":
          cal = String(parseFloat(preState) + parseFloat(curState));
          break;
        case "X":
          cal = String(parseFloat(preState) * parseFloat(curState));
          break;
        case "-":
          cal = String(parseFloat(preState) - parseFloat(curState));
          break;
        default:
          return;
      }
      setInput("");
      setPreState(cal);
      setCurState("");
    };
  
    const minusPlus = () => {
      if (curState.charAt(0) === "-") {
        setCurState(curState.substring(1));
      } else {
        setCurState("-" + curState);
      }
    };
  
    const percent = () => {
      preState
        ? setCurState(String((parseFloat(curState) / 100) * preState))
        : setCurState(String(parseFloat(curState) / 100));
    };
  
    const reset = () => {
      setPreState("");
      setCurState("");
      setInput("0");
    };


  return (
    <div className='calc__wrapper'>
        <div className="calc__screen">
        {input !== "" || input === "0" ? (
            <NumberFormat
              value={input}
              displayType={"text"}
              thousandSeparator={true}
            />
          ) : (
            <NumberFormat
              value={preState}
              displayType={"text"}
              thousandSeparator={true}
            />
          )}
        </div>
            <div className="calc__body">
                <div className="calc__row1">
                <div className="calc__btn calc__dark-gray calc__AC" onclick={(e)=>{
                    reset();
                }}>AC</div>
                <div className="calc__btn calc__dark-gray" onclick={(e)=>{
                    percent();
                }}>%</div>
                <div className="calc__btn calc__dark-gray" onclick={(e)=>{
                    minusPlus();
                }}>+/-</div>
                <div className="calc__btn calc__orange calc__divide" onclick={(e)=>{
                    operatorType(e);
                }}>&#247;</div>
                </div>
                <div className="calc__row2">
                <div className="calc__btn calc__light-gray" onclick={(e)=>{
                    inputNum({target:{innerText:"7"}});
                }}>7</div>
                <div className="calc__btn calc__light-gray" onclick={inputNum}>8</div>
                <div className="calc__btn calc__light-gray" onclick={inputNum}>9</div>
                <div className="calc__btn calc__orange" onclick={(e)=>{
                    operatorType(e);
                }}>x</div>
                </div>
                <div className="calc__row3">
                <div className="calc__btn calc__light-gray" onclick={inputNum}>4</div>
                <div className="calc__btn calc__light-gray" onclick={inputNum}>5</div>
                <div className="calc__btn calc__light-gray" onclick={inputNum}>6</div>
                <div className="calc__btn calc__orange" onclick={(e)=>{
                    operatorType(e);
                }}>+</div>
                </div>
                <div className="calc__row4">
                <div className="calc__btn calc__light-gray" onclick={inputNum}>1</div>
                <div className="calc__btn calc__light-gray" onclick={inputNum}>2</div>
                <div className="calc__btn calc__light-gray" onclick={inputNum}>3</div>
                <div className="calc__btn calc__orange" onclick={(e)=>{
                    operatorType(e);
                }}>-</div>
                </div>
                <div className="calc__row5">
                <div className="calc__btn calc__light-gray calc__zero" onclick={inputNum}>0</div>
                <div className="calc__btn calc__light-gray" onclick={inputNum}>.</div>
                <div className="calc__btn calc__orange calc__equals" onclick={equals}>=</div>
                </div>
            </div>
        <div className="calc__circleCloseContainer">
            <div className="calc__circle calc__circle1">
                <p>x</p>
                </div>
            <div className="calc__circle calc__circle2">
                <p>-</p>
            </div>
            <div className="calc__circle calc__circle3">
                <p>+</p>
            </div>
        </div>
    </div>
  )
}

export default Calc