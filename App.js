import React from 'react';
// import './App.css';
import { BrowserRouter } from 'react-router-dom';
import BaseRouter from './Routes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <BaseRouter />
      </div>

    </BrowserRouter>
    
  );
}

export default App;
