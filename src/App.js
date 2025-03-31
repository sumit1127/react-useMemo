import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  function expensiveTask(num) {
    for (let i = 0; i <= 1000000000; i++) {}
    return num * 2;
  }

  let double = expensiveTask(5);

  return (
    <div>
      <h1>count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Counter</button>
      <h3>Double : {double}</h3>
    </div>
  );
};

export default App;
