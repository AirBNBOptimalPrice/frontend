import React, { useState } from "react";
import axios from "axios";

export default function Login({ history }) {
  const [login, setLogin] = useState(
    {
      username: '',
      password: ''
    }
  )

  const handleChange = event => {
    setLogin({ ...login, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    console.log("login: ", login)
    event.preventDefault();
    axios.post('https://bnb-web-backend.herokuapp.com/api/auth/login', login)
      .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.token);
        history.push("/dashboard");
      })
      .catch(err => console.log(err.response));
  };

  const handleRegister = event => {
    history.push("/register")
  }



  return (
    <div>
      <h2>Log in</h2> 
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={handleChange}
          value={login.username}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
          value={login.password}
        />
        <button type="submit">Log in</button>

      </form>
      <button onClick={handleRegister}>Don't have an account? Sign up!</button>
    </div>
  )
}