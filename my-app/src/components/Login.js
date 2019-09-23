import react, {useState} from "react";
import axios from "axios";

export default function Login({ history }){
  const [login, setLogin] = useState(
    {
      username: '',
      password: ''
    }
  )

  const handleChange = event => {
    setLogin({...login, [event.target.name]: event.target.value});
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios.post('http://localhost:3000/api/login', login)
      .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.payload);
        history.push("/dashboard");
      })
      .catch(err => console.log(err.response));
  };



  return(
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
      <button type="submit">Log In</button>
      <button >Sign Up!</button>
    </form>
  )
}