import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Form from './Form'

export default function UpdateUser() {
    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const {id} = useParams()

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

     useEffect(() => fetchUser(),[]) 

if(isLoading) {
    return <h1>Loading...</h1>
}

  return (
    <div>
        <Form isUpdating={true} id={id} updatedEmail={user.email} updatedPassword={user.password}/>
    </div>
  )
}
