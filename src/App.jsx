import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './routes/Tela-Login/login';
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;