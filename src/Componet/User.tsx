import React, { FC } from "react";
import userModal from "../types/Modals";

// interface Props {
//   name: string,
//   age: number,
//   addUser: ()=> void
// }
 
interface Props {
    user: userModal,
    addUser: (user:userModal)=>void
}

const User: FC<Props> = ({user, addUser}) => {
  return (
    <div>
      <h1>
        Hello form: {user.name} Experience: {user.email}
      </h1>
      <button onClick={()=>addUser(user)}>Add me</button>
    </div>
  );
};

export default User;
