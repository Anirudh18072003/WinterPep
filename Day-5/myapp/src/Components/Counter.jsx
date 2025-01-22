import React, { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => setCalculation(count * 2), [count]);

  return (
    <>
      {" "}
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Calculation:{calculation}</p>
    </>
  );
}
