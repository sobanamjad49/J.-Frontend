import React, { useMemo, useState } from 'react';

function Me() {

  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  function cubeNumber(num) {
    console.log('Calculation done');
    return Math.pow(num, 3);
  }

  // Correct useMemo implementation
  const result = useMemo(() => cubeNumber(number), [number]);

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-full">
        <label htmlFor="input" className="mb-2 text-lg font-medium">
          Enter Your Number:
        </label>
        <input
          id="input"
          type="number"
          value={number}
          placeholder="Type Something..."
          className="w-full max-w-md px-4 border-gray-300 rounded-md shadow-sm focus-ring-2"
          onChange={(e) => setNumber(Number(e.target.value))} // Convert input to number
        />
      </div>

      <span className="font-3xl bold">Cube Of the Number: {result}</span>

      <hr />

      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}
   
export default Me
