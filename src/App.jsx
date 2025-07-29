import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TelaAcesso from './routes/Tela-Login/login';
import TelaRegistro from './routes/Tela-Registro/registro';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TelaAcesso />} /> 
        <Route path="/login" element={<TelaAcesso />} />
        <Route path="/registrar" element={<TelaRegistro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;