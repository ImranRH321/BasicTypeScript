import React, { FC } from "react";
import userModal from "../types/Modals";
import userObject from "../types/PkModal";

// interface Props {
//     name: string
//     age: number;
//     addUser: ()=> void;
// }

interface Props {
  user: userObject;
  addUser: (user: userObject) => void;
}

const PkUser: FC<Props> = ({ user, addUser }) => {
  return (
    <div>
      <h2>
        Name: {user.name} and Email: {user.email}
      </h2>
      <button onClick={() => addUser(user)}>Add Click </button>
    </div>
  );
};

export default PkUser;
