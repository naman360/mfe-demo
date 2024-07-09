import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl flex flex-col bg-blue-900 text-white p-4">
      <div>Component from remote :: </div>
      <div> Count: {count}</div>
      <div>
        <button
          className="border-2 border-red-500 p-1"
          onClick={() => setCount((c) => c + 1)}
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;
