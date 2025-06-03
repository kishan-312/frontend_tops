import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>Counter Data : {count}</h1>
      <button onClick={increment}> Increase </button>
    </>
  );
}

export default Counter;
