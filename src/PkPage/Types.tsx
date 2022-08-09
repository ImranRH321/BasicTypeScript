
import React from 'react';

// types 
const subject:string = 'English';
const accountMoney: number = 4000;
const isMarid:boolean = false;
const student: string[] = ['jeef', 'hary','zio'];
const id: number[] = [30, 40, 50,6]
 
// interface 
interface Person {
  name: string,
  job?: string,
  age: number 
  //  any --> je kono typer man rakay jay -->
  marketer: any ; 
  // union 
   mizan: string | number  
}
const person: Person = {
  name: 'ismail',
  age: 20,
  marketer: {lat: 10, long: 30},
  mizan: 5000  
}

const handleUsers = (fName: string, age: number, money: number):number=> {
  const name: string = 'kosmit';
  return age+ money 
}



const Types = () => {
  return (
    <div>
      
    </div>
  );
};

export default Types;