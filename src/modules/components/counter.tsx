import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="counter">
      <button onClick={() => setCount(count - 1)}>Remove</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
};
