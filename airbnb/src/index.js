import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom"; //Routes will have props/state objects! history and match
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
