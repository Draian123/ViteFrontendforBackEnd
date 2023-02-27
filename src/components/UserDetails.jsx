import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';

export default function UserDetails() {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const {id} = useParams()
  const navigate = useNavigate()

  const fetchUser = () => {
    axios
      .get(`http://localhost:5005/api/user/${id}`)
      .then((response) => {
        setUser(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deleteUser = () => {
    axios
      .delete(`http://localhost:5005/api/delete/${id}`)
      .then((response) => {
        console.log(response.data)
        navigate('/')
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  useEffect(() => {
    fetchUser();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
        <div>
            <h4>{user.email}</h4>
            <p>{user.password}</p>
            <Link to={`/update/${id}`}>
                <button type='button'>Update</button>
            </Link>
            <button type='button' onClick={deleteUser}>Delete</button>
        </div>
  )
}
