import React from 'react';
import './App.css';
import { Route, Link, Redirect } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Register from "./components/Register"
import Login from "./components/Login"
import FormikOptForm from './components/FormikOptForm';
import Myproperties from './components/Myproperties';
import UpdateProperty from './components/UpdateProperty';


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
      <Route path="/create" component={FormikOptForm}/>
      <Route path="/manage" component={Myproperties} />
      <Route path="/update" component={UpdateProperty} />
    </div>
  );
}

export default App;
