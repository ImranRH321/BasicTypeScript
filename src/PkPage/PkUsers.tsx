import React, { useEffect, useState } from "react";
import userObject from "../types/PkModal";

import PkUser from "./PkUser";

const PkUsers = () => {
  const [users, setUser] = useState<userObject[]>([]);
  const [team, setTeam] = useState<userObject[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        setUser(data);
      });
  }, []);

  const handleAddUsers = (user: userObject): void => {
    const newTeam = [...team, user]
    setTeam(newTeam)
  };
  return (
    <div>
      <h1>This is My users {users.length}</h1>
       <h2>Team Size {team.length}</h2>
      {/* <PkUser name="Roton" age={100} addUser={handleAddUsers}></PkUser> */}

      {
        users.map(user => <PkUser user={user} addUser={handleAddUsers}></PkUser>)
      }
    </div>
  );
};

export default PkUsers;
