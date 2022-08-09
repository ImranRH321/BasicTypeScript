import React, { useEffect, useState } from "react";
import userModal from "../types/Modals";
import User from "./User";

const Users = () => {
  const [users, setUsers] = useState<userModal[]>([]);

  const [team, setTeam] = useState<userModal[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  //  handle
  const handleAddUsers = (user: userModal): void => {
    const newTeam = [...team, user];
    setTeam(newTeam);
  };
  return (
    <div>
      <h1>The users </h1>
      <h1>Team Size: {team.length}</h1>
      {/* <User name="moynul" age={30} addUser={handleAddUsers}></User> */}
      {users?.map(user => (
        <User user={user} addUser={handleAddUsers}></User>
      ))}
    </div>
  );
};

export default Users;
