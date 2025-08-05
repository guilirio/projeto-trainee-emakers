import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TelaAcesso from './routes/Tela-Login/login';
import TelaRegistro from './routes/Tela-Registro/registro';
import TelaReset from './routes/Tela-Reset/reset'; 
import TelaConta from './routes/Tela-Conta/conta';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TelaAcesso />} /> 
        <Route path="/login" element={<TelaAcesso />} />
        <Route path="/registrar" element={<TelaRegistro />} />
        <Route path="/recuperar" element={<TelaReset />} />
        <Route path="/conta" element={<TelaConta />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;