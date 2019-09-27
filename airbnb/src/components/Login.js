import React, { useState } from "react";
import axios from "axios";
import './Login.css';
import { Route, Link } from 'react-router-dom'
import About from './about'

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

  const handleAbout = event => {
    history.push("/about")
  }


  return (
    <div>
    <div className='background'>Log In</div>
      <div className='content'> 
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
        <button  class='button' type="submit">Log in</button>
      </form>
      <button class='button' onClick={handleRegister}>No account? Sign up!</button>
      <button> <Link to="/about">Meet the Developers</Link></button>
      <Route path="/about" component={About} />
     </div>
     </div>
  )
}