import getUsers from "../apis/getUsers";
import "./Users.css";
import { useState, useEffect } from "react";
import User from "./User";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsers();
      setUsers(users);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      {users.length > 0 ? (
        <div className="cards-container">
          {users.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </div>
      ) : (
        <p>No Users Exist</p>
      )}
    </div>
  );
};

Users.propTypes = {};

export default Users;
