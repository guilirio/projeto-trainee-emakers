import React from 'react';
import './conta.css';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

// Importação direta das imagens
import deliverUsMars from '../../assets/images/deliver-us-mars.png';
import bobEsponja from '../../assets/images/bob-esponja.png';
import deathStranding from '../../assets/images/death-stranding.png';
import god from '../../assets/images/god-of-war.png';

function PerfilUsuario() {
  return (
    <div>
      <Navbar />
      <main className="perfil-container">
        <section className="dados-usuario">
          <h1 className="titulo-usuario">Olá, Usuário</h1>
          <p className="info-usuario">Seu email é nomeusuario@email.com</p>
          <p className="info-usuario">Seu CPF 123.456.789-00</p>

          <div className="acoes-usuario">
            <a className="botao-acao">
              Alterar Dados <EditIcon />
            </a>
            <a className="botao-acao">
              Excluir Conta <DeleteIcon />
            </a>
            <a className="link-admin">Tela do admin</a>
          </div>
        </section>

        <section className="jogos-adquiridos">
          <h2 className="titulo-jogos">Jogos adquiridos:</h2>
          <div className="lista-jogos">
            <div className="card-jogo">
              <div
                className="jogo-imagem"
                style={{ 
                  backgroundImage: `url(${deliverUsMars})`,
                  width: '190px',
                  height: '250px'
                }}
              />
              <p className="nome-jogo">Deliver Us Mars</p>
            </div>
            <div className="card-jogo">
              <div
                className="jogo-imagem"
                style={{ 
                  backgroundImage: `url(${bobEsponja})`,
                  width: '190px',
                  height: '250px'
                }}
              />
              <p className="nome-jogo">Bob Esponja</p>
            </div>
            <div className="card-jogo">
              <div
                className="jogo-imagem"
                style={{ 
                  backgroundImage: `url(${deathStranding})`,
                  width: '190px',
                  height: '250px'
                }}
              />
              <p className="nome-jogo">Death Stranding</p>
            </div>
            <div className="card-jogo">
              <div
                className="jogo-imagem"
                style={{ 
                  backgroundImage: `url(${god})`,
                  width: '190px',
                  height: '250px'
                }}
              />
              <p className="nome-jogo">God of War</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default PerfilUsuario;