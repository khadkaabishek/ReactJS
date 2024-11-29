import React, { useState } from "react";

const Sample = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <button
        style={{ marginTop: "50px" }}
        onClick={() => setCounter(counter + 1)}
      >
        Click Me
      </button>
      <div>{counter}</div>
    </>
  );
};

export default Sample;
