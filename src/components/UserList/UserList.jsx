import React, { useState, useEffect } from "react";
import UserCard from "../UserCard/UserCard";
import "./UserList.css";

let UserList = () => {
  let [users, setUsers] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    let fetchUsers = async () => {
      try {
        let response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        let data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error("We have a problem:", error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="user-list">
      {loading ? (
        <p>Loading...</p>
      ) : (
        users.map((user) => <UserCard key={user.id} user={user} />)
      )}
    </div>
  );
};

export default UserList;
