import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function UserList() {
  const [allUsers, setAllUsers] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = () => {
    axios
      .get('http://localhost:5005/api/')
      .then((response) => {
        setAllUsers(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>hi</h1>
      {allUsers.map((user) => {
        return(<Link key={user._id} to={`/user/${user._id}`}>{user.email}</Link>)
      })}
    </div>
  );
}
