import React, { useCallback, useState } from "react";

const Button = React.memo(({ onClick, label }) => {
  console.log(`Rendering Button: ${label}`);
  return (
    <button className="btn btn-success me-2" onClick={onClick}>
      {label}
    </button>
  );
});

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
  }, []);

  return (
    <div>
      <h5>Counter</h5>
      <p>
        Current Count: <span className="fw-bold">{count}</span>
      </p>
      <Button onClick={increment} label="Increment" />
      <Button onClick={decrement} label="Decrement" />
    </div>
  );
};

export default Counter;
