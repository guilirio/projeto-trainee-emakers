import React from 'react';
import './conta.css';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

// Importação direta das imagens dos jogos
import deliverUsMars from '../../assets/images/deliver-us-mars.png';
import bobEsponja from '../../assets/images/bob-esponja.png';
import deathStranding from '../../assets/images/death-stranding.png';
import god from '../../assets/images/god-of-war.png';

function Conta() {
  return (
    <div>
      {/* Navbar fixa no topo */}
      <Navbar />

      {/* Conteúdo principal do perfil */}
      <main className="perfil-container">

        {/* Seção de dados do usuário */}
        <section className="dados-usuario">
          <h1 className="titulo-usuario">Olá, Usuário</h1>
          <p className="info-usuario">Seu email é nomeusuario@email.com</p>
          <p className="info-usuario">Seu CPF 123.456.789-00</p>

          {/* Botões de ação do usuário */}
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

        {/* Seção de jogos adquiridos */}
        <section className="jogos-adquiridos">
          <h2 className="titulo-jogos">Jogos adquiridos:</h2>

          {/* Lista de jogos em grid */}
          <div className="lista-jogos">

            {/* Card do jogo Deliver Us Mars */}
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

            {/* Card do jogo Bob Esponja */}
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

            {/* Card do jogo Death Stranding */}
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

            {/* Card do jogo God of War */}
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

      {/* Footer fixo no final */}
      <Footer />
    </div>
  );
}

export default Conta;
