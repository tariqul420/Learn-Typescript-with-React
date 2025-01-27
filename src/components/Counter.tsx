import { useState } from 'react';
type user = {
  id: number;
  name: string;
  email: string;
};

const Counter = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState<null | user>(null);

  const handelAddUser = () => {
    setUser({
      id: 1,
      name: 'Tariqul',
      email: 'tariqul@gmail.com',
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-center gap-6">
        <button onClick={() => setCount(count + 1)} className="border bg-amber-400 rounded-md px-4 py-2 cursor-pointer">
          Increment
        </button>

        <p>Total Count: {count}</p>

        <button onClick={() => setCount(count - 1)} className="border bg-amber-400 rounded-md px-4 py-2 cursor-pointer">
          Decrement
        </button>
      </div>

      <button onClick={handelAddUser} className="border bg-red-600 rounded-md px-4 py-2 cursor-pointer">
        Add User
      </button>

      {user && (
        <p>
          User name is {user?.name} and user email is {user?.email}
        </p>
      )}
    </div>
  );
};

export default Counter;
