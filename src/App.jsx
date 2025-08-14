import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TelaAcesso from './routes/Tela-Login/login';
import TelaRegistro from './routes/Tela-Registro/registro';
import TelaReset from './routes/Tela-Reset/reset'; 
import TelaConta from './routes/Tela-Conta/conta';
import Popular from './routes/Tela-Populares/popular';
import Lancamentos from './routes/Tela-Lancamentos/lancamentos';
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
        <Route path="/populares" element={<Popular />} />
        <Route path="/lancamentos" element={<Lancamentos />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;