import React, { useEffect, useState } from 'react';

import Container from '@mui/material/Container';
import { Box } from '@mui/system';

import './styles.css';

export const App: React.FC = () => {
  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [operator, setOperator] = useState();
  const [error, setError] = useState("");
  const MAX_LENGTH = 9;

  useEffect(() => {
    if(num.toString().length > MAX_LENGTH) setError("Limite máximo de numeros")
  },[num])

  const inputValue = (e: any) => {
    const input=e.target.value
    if(num === 0 ){
      setNum(input)
    }else{
      setNum(num + input);
      setError("")
    }
  }

  const operatorHandler = (e: any) =>{
    const operadorInput = e.target.value
    setOperator(operadorInput)
    setOldNum(num)
    setError("")
    setNum(0)
  }

  const divisionCalc = (oldNum: number, num: number) =>{
    if(num > 0){
      setNum(oldNum / num)
    }else{
      setError("Divisão impossível")
      setNum(0)
    }
  }
  
  const calculate = () => {
    if(operator === "+"){
      setNum(Number(oldNum) + Number(num))
    }
    if(operator === "X"){
      setNum(oldNum * num)
    }
    if(operator === "/"){
      divisionCalc(oldNum, num)
    }
    if(operator === "-"){
      setNum(oldNum - num)
    }
  }

  const clear = () => {
    setError("")
    setNum(0);
  }

  const render = () =>{
    if(error !== ""){
      return <div>
        {error}
      </div>
    }
    return <div>{num}</div>
  }

  return (
    <div>
    <Box m={12}/>
    <Container maxWidth="xs">
    <div className="wrapper">
      <div className="result" >{render()}</div>
          <button className="operators" onClick={operatorHandler} value="X">X</button>
          <button className="operators" onClick={operatorHandler} value="/">/</button>
          <button className="operators" onClick={operatorHandler} value="+">+</button>
          <button className="operators" onClick={operatorHandler} value="-">-</button>

          <button className="numbers" onClick={inputValue} value={7}>7</button>
          <button className="numbers" onClick={inputValue} value={8}>8</button>
          <button className="numbers" onClick={inputValue} value={9}>9</button>
          <button className="numbers" onClick={inputValue} value={0}>0</button>

          <button className="numbers" onClick={inputValue} value={4}>4</button>
          <button className="numbers" onClick={inputValue} value={5}>5</button>
          <button className="numbers" onClick={inputValue} value={6}>6</button>
          <button className="operators" onClick={clear} >C</button>

          <button className="numbers" onClick={inputValue} value={1}>1</button>
          <button className="numbers" onClick={inputValue} value={2}>2</button>
          <button className="numbers" onClick={inputValue} value={3}>3</button>
          <button className="operators" onClick={calculate} > = </button>
      </div>
    </Container>
    </div>
  );
};

