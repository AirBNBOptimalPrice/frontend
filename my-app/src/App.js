import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, Redirect } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Register from "./components/Register"
import Login from "./components/Login"

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />
      <PrivateRoute path="/dashboard" component={Dashboard}/>
    </div>
  );
}

export default App;
