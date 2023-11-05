import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(15);
  const [tanmay, modi] = useState(9);
  // let counter = 15;
  const addValue = () => {
    // console.log("value added",Math.random());
    // counter = counter+1
    if (tanmay < 20) {
      modi(89 * 4);
    } //evalated expression
  };

  const remove = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h1>hello world</h1>
      <h2>Counter value: {tanmay}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={remove}>remove value</button>
    </>
  );
}

export default App;
