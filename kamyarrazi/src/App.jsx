import { useState } from "react";
import "./App.css";


function App() {
  const [count, setCount] = useState(0);
  const [textinput, setTextInput] = useState('');
  const hendleClick = () => {
    setCount(count + 1);
    
  }

  const hendelchang = (event)=> {
    setTextInput(event.target.value);
  }
  return (
    <>
      <h2>{count}</h2>
      <h5> {textinput} </h5>
      <div className="parent">
        <button onClick={hendleClick}> کلیک کنید </button> 
        <input onChange={hendelchang}  placeholder="نام خود را وارد کنید" type="text" />
        </div>
    </>
  );
}

export default App;
