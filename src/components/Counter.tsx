import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center justify-center gap-6">
      <button onClick={() => setCount(count + 1)} className="border bg-amber-400 rounded-md px-4 py-2 cursor-pointer">
        Increment
      </button>

      <p>Total Count: {count}</p>

      <button onClick={() => setCount(count - 1)} className="border bg-amber-400 rounded-md px-4 py-2 cursor-pointer">
        Decrement
      </button>
    </div>
  );
};

export default Counter;
