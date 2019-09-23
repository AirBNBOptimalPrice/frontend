import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, Redirect } from 'react-router-dom';

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
      <Route path="/login" component={Login} />
      <PrivateRoute path="/dashboard" component={Dashboard}/>
    </div>
  );
}

export default App;
