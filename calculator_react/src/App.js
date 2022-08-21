import { clear } from '@testing-library/user-event/dist/clear';
import { useState } from 'react';
function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("")
  const operate = ['/', '*', '+', '-','.'];

  const updateCalc = value => {
    if(
      operate.includes(value) && calc=== "" ||
      operate.includes(value) && operate.includes(calc.slice(-1))
    )
    {
      return ;
    }
    setCalc(calc + value);
  

  if(!operate.includes(value)){
    setResult(eval(calc+value).toString());
  }
}
  const createDigits =(e)=>{
    const digits = [];
    for(let i=1;i<10;i++){
      digits.push(
        <button 
        onClick={(e)=> updateCalc(i.toString())} 
        key={i}>
          {i}
          </button>
      )
    }
      return digits;
  }

  const calculator = (e) => {
    setCalc(eval(calc.toString()))
  }

  const deleteLast = (e)=>{
    if(calc == ""){
    return;
    }
    const value = calc.slice(0,-1)
    setCalc(value)
  }
  
  const clean = (e)=>{
    setCalc("")
    setResult("")
  }

  return (
    <>
    <h1>GAME TRAIN</h1>
    <h3>MERN Bootcamp</h3>
    <h2>Name: Fatir Saeed</h2>
    <div className="App">
      
      <div className="calculator">
        <div className="display">
          {result ? <span>({result})</span> : ""}
          {calc || "0"}
        </div>
        <div className="operators">
          <button onClick={()=> updateCalc('/')}>/</button>
          <button onClick={()=> updateCalc('*')}>*</button>
          <button onClick={()=> updateCalc('+')}>+</button>
          <button onClick={()=> updateCalc('-')}>-</button>
          <button onClick={()=> updateCalc('(')}>(</button>
          <button onClick={()=> updateCalc(')')}>)</button>
          <button onClick={ clean}>CLR</button>
          <button onClick={deleteLast}>DEL</button>
        </div>
        <div className="digits">
          {createDigits()}
          <button onClick={()=> updateCalc('0')}>0</button>
          <button onClick={()=> updateCalc('.')}>.</button>
          <button onClick={calculator} >=</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;