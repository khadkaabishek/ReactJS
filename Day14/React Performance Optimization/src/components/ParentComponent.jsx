import React, { useState } from "react";
import ExpensiveComponent from "./ExpensiveComponent";
import List from "./List";
import Counter from "./Counter";

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [filter, setFilter] = useState("");

  return (
    <div className="container mt-5">
      <h1 className="text-center text-primary mb-4">
        React Performance Optimization
      </h1>

      {/* Counter Section */}
      <div className="mb-4 text-center">
        <button
          className="btn btn-primary me-2"
          onClick={() => setCount(count + 1)}
        >
          Increase Count
        </button>
        <p className="mt-2">
          Count: <span className="fw-bold">{count}</span>
        </p>
      </div>

      {/* Expensive Component */}
      <div className="card mb-4 p-3">
        <ExpensiveComponent />
      </div>

      {/* List Section */}
      <div className="card mb-4 p-3">
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Filter list..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <List filter={filter} />
      </div>

      {/* Counter with Buttons */}
      <div className="card p-3">
        <Counter />
      </div>
    </div>
  );
};

export default ParentComponent;
