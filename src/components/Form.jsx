import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Form({
    updatedEmail="",
    updatedPassword ="",
    id,
    isUpdating = false
  }) {
  const [email, setEmail] = useState(updatedEmail);
  const [password, setPassword] = useState(updatedPassword);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit entered")
      axios({
        method: isUpdating ? 'put' : 'post' ,
        url: isUpdating ? `http://localhost:5005/api/update/${id}` : `http://localhost:5005/api/signup`,
        data: {
            email,
            password
          }
        // responseType: 'stream',
      })
        .then((response) => {
          console.log(response.data);
          if (response.status === 201) {
            console.log(response.data._id);
            navigate(`/user/${response.data._id}`);
          }
          if (response.status === 200) {
            navigate(`/`);
          }
        })
        .catch((error) => {
          console.log(error);
        });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        E-mail
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <button type="submit">{isUpdating ? 'Update' : 'Create'}</button>
    </form>
  );
}
