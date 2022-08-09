import React, {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  useState,
} from "react";
//
interface User {
  name: string;
  age: number;
}

const PkCounter = () => {
  const [counter, setCounter] = useState<number>(0);
  const [users, setUsers] = useState<User | null>(null);

  const handleIncrease = (): void => {
    setCounter(counter + 1);
  };

  const handleFormUser = (e: FormEvent<HTMLFormElement>): void => {
    const user = {
      name: "jobbar",
      age: 50,
    };
    //
    setUsers(user);
  };

  // single input on change
  const handleChage = (e: ChangeEvent<HTMLIFrameElement>) :void => {

  }

  return (
    <div>
      <h1>PkCounter</h1>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
};

export default PkCounter;
