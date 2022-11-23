import { useState } from "react";

function FunctionalCounter() {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 10040);
  const decrement = () => setCounter(counter - 10040);
  return (
    <div>
      <h1>Functional Counter</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={increment}>Increment +</button>
      <br />
      <br />
      <button onClick={decrement}>Decrement -</button>
    </div>
  );
}
export default FunctionalCounter;
