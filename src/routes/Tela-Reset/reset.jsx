import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EastIcon from '@mui/icons-material/East';
import './reset.css';

function TelaRecuperacao() {
  const [email, setEmail] = useState('');
  const [aviso, setAviso] = useState('');
  const navegar = useNavigate();

  function validarEmail(valor) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(valor);
  }

  function aoEnviar(e) {
    e.preventDefault();

    if (!email) {
      setAviso('Por favor, preencha o e-mail!');
      return;
    }

    if (!validarEmail(email)) {
      setAviso('Por favor, insira um e-mail válido!');
      return;
    }

    setAviso('');
    // Aqui você pode adicionar lógica de envio de recuperação
    alert('Instruções de recuperação enviadas para o e-mail!');
  }

  return (
    <div className="wrapper-reset">
      <div className="area-reset">
        <div className="grupo-campos-reset">
          <h1 className="titulo-reset">Recuperar Conta</h1>
          <form className="formulario-reset" onSubmit={aoEnviar}>
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            {aviso && <p className="mensagem-erro">{aviso}</p>}
            <div className="grupo-botao">
              <button type="submit" className="botao-confirmar">
                <EastIcon fontSize="large" />
              </button>
            </div>
          </form>
        </div>
        <div className="links-reset">
          <a href="/registrar">Criar Conta</a>
          <a href="/login">Voltar ao Login</a>
        </div>
      </div>
      <div className="area-imagem-reset">
        <img
          src="/src/assets/images/login-image.png"
          className="img-reset"
          alt="Imagem Recuperação"
        />
      </div>
    </div>
  );
}

export default TelaRecuperacao;
