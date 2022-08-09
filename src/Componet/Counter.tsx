import React, { ChangeEvent, FormEvent, useState } from "react";

interface User {
  name?: string;
  job?: string;
}

const Counter = () => {
  const [counter, setCounter] = useState<number>(0);
  const [user, setUsers] = useState<User | null>(null);

  const handleIncrease = (): void => {
    setCounter(counter + 1);
  };
  const handleDecrease = (): void => {
    setCounter(counter - 1);
  };
  //

  // form
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userData = {
      name: "kouer",
      job: "addom",
    };
    setUsers(userData);
  };

  //  onchange input flied
  const handleChagne = (e: ChangeEvent<HTMLInputElement>): void => {};

  return (
    <div>
      <h1>This is Counter </h1>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
};

export default Counter;
