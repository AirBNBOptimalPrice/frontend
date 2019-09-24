import React from 'react';
import './App.css';
import Navigation from './components/Navbar'
import Dashboard from './components/Dashboard';
import FormikOptForm from './components/Priceform';



function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <FormikOptForm/>
        
      </header>
    </div>
  );
}

export default App;
