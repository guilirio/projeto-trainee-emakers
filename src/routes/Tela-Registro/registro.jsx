import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EastIcon from '@mui/icons-material/East';
import './registro.css';

function TelaRegistro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [cpf, setCpf] = useState('');
  const [aviso, setAviso] = useState('');
  const navegar = useNavigate();

  function validarEmail(valor) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(valor);
  }

  function aoEnviar(e) {
    e.preventDefault();

    if (!nome || !email || !senha || !confirmarSenha || !cpf) {
      setAviso('Preencha todos os campos!');
      return;
    }

    if (!validarEmail(email)) {
      setAviso('Insira um e-mail válido!');
      return;
    }

    if (senha !== confirmarSenha) {
      setAviso('As senhas não coincidem!');
      return;
    }

    setAviso('');
    // Aqui você pode adicionar a lógica para enviar os dados do registro
    navegar('/login');
  }

  return (
    <div className="wrapper-login">
      <div className="area-login">
        <div className="grupo-campos">
          <h1 className="titulo-login">Registrar</h1>
          <form className="formulario-login" onSubmit={aoEnviar}>
            <input
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={e => setNome(e.target.value)}
            />
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
               />
            <input
              type="text"
              placeholder="CPF"
              value={cpf}
              onChange={e => setCpf(e.target.value)}
            />
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={e => setSenha(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirmar Senha"
              value={confirmarSenha}
              onChange={e => setConfirmarSenha(e.target.value)}
            />
            {aviso && <p className="mensagem-erro">{aviso}</p>}
            <div className="grupo-botao">
              <button type="submit" className="botao-confirmar">
                <EastIcon fontSize="large" />
              </button>
            </div>
          </form>
        </div>
        <div className="links-login">
          <a href="/login">Já tem conta? Entrar</a>
        </div>
      </div>
      <div className="area-imagem-login">
        <img src="/src/assets/images/login-image.png" className="img-login" alt="Visual de acesso" />
      </div>
    </div>
  );
}

export default TelaRegistro;