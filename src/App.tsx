import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./Componet/Counter";
import Users from "./Componet/Users";
import PkCounter from "./PkPage/PkCounter";
import PkUsers from "./PkPage/PkUsers";

let student: string = "raja";
const phone: number = 100;
const isMan: boolean = true;
const students: string[] = ["jeef", "deef", "zaap"];
const student2: number[] = [10, 30, 40, 50];

//object system 1
const person4: { name: string; job: string; age: number } = {
  name: "apu apa",
  job: "night gay",
  age: 40,
};

//object system 2 --> user for --> interface
interface Person {
  name: string;
  job?: string;
  age: number;
  location?: string | number;
  employed: any;
}
// any - dile ja isca dite pai

const person: Person = {
  name: "apu apa",
  age: 40,
  location: 200,
  employed: ["jobbar", "jeef", "jony"],
};

// function
const handleTypeScriptFunction = (
  firstName: string,
  lastName: string,
  age: number
): number => {
  const pices: number = 100;
  return age;
};

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter>
          <Users></Users> */}
      {/* ========================= */}
      {/* PK  */}
      {/* ========================= */}
      <PkCounter></PkCounter>
      <PkUsers></PkUsers>
    </div>
  );
}

export default App;
