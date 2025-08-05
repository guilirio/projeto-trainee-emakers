import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EastIcon from '@mui/icons-material/East';
import './login.css';

function TelaAcesso() {
  const [identificador, setIdentificador] = useState('');
  const [chave, setChave] = useState('');
  const [aviso, setAviso] = useState('');
  const navegar = useNavigate();

  function validarIdentificador(valor) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(valor);
  }

  function aoEnviar(e) {
    e.preventDefault();

    if (!identificador || !chave) {
      setAviso('Por favor, preencha todos os campos!');
      return;
    }

    if (!validarIdentificador(identificador)) {
      setAviso('Por favor, insira um e-mail válido!');
      return;
    }

    setAviso('');
    // Aqui você pode adicionar lógica de autenticação
    navegar('/conta');
  }

  return (
    <div className="wrapper-login">
      <div className="area-login">
        <div className="grupo-campos">
          <h1 className="titulo-login">Login</h1>
          <form className="formulario-login" onSubmit={aoEnviar}>
            <input
              type="email"
              placeholder="E-mail"
              value={identificador}
              onChange={e => setIdentificador(e.target.value)}
            />
            <input
              type="password"
              placeholder="Senha"
              value={chave}
              onChange={e => setChave(e.target.value)}
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
          <a href="/registrar">Criar Conta</a>
          <a href="/recuperar">Esqueceu a Senha?</a>
        </div>
      </div>
      <div className="area-imagem-login">
        <img src="/src/assets/images/login-image.png" className="img-login" alt="Imagem Login" />
      </div>
    </div>
  );
}

export default TelaAcesso;