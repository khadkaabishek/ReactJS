import React, { useMemo, useState } from "react";

const ExpensiveComponent = React.memo(() => {
  const [number, setNumber] = useState(10);

 
  const calculateFactorial = useMemo(() => {
    console.log("Calculating factorial...");
    const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
    return factorial(number);
  }, [number]);

  return (
    <div>
      <h5>Expensive Factorial Calculation</h5>
      <div className="input-group mb-3">
        <span className="input-group-text">Number</span>
        <input
          type="number"
          className="form-control"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
        />
      </div>
      <p className="text-muted">
        Factorial of {number}:{" "}
        <span className="fw-bold">{calculateFactorial}</span>
      </p>
    </div>
  );
});

export default ExpensiveComponent;
