import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import EastIcon from '@mui/icons-material/East';
import './login.css';

/* ================= Variantes de animação ================= */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.2,   // Animação em sequência
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

function TelaAcesso() {
  // Estados do formulário
  const [identificador, setIdentificador] = useState('');
  const [chave, setChave] = useState('');
  const [aviso, setAviso] = useState('');
  const navegar = useNavigate();

  /* Valida se o identificador é um email válido */
  function validarIdentificador(valor) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(valor);
  }

  /* Função chamada ao enviar o formulário */
  function aoEnviar(e) {
    e.preventDefault();

    // Verifica se todos os campos foram preenchidos
    if (!identificador || !chave) {
      setAviso('Por favor, preencha todos os campos!');
      return;
    }

    // Verifica se o e-mail é válido
    if (!validarIdentificador(identificador)) {
      setAviso('Por favor, insira um e-mail válido!');
      return;
    }

    setAviso('');
    navegar('/conta'); // Redireciona para a conta
  }

  return (
    <motion.div
      className="wrapper-login"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Área do formulário */}
      <motion.div 
        className="area-login"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grupo-campos">
          {/* Título do formulário */}
          <motion.h1 className="titulo-login" variants={itemVariants}>
            Login
          </motion.h1>

          {/* Formulário de login */}
          <motion.form 
            className="formulario-login" 
            onSubmit={aoEnviar}
            variants={containerVariants}
          >
            <motion.input
              variants={itemVariants}
              type="email"
              placeholder="E-mail"
              value={identificador}
              onChange={e => setIdentificador(e.target.value)}
            />
            <motion.input
              variants={itemVariants}
              type="password"
              placeholder="Senha"
              value={chave}
              onChange={e => setChave(e.target.value)}
            />

            {/* Mensagem de erro */}
            {aviso && (
              <motion.p 
                className="mensagem-erro"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {aviso}
              </motion.p>
            )}

            {/* Botão de confirmação */}
            <div className="grupo-botao">
              <motion.button 
                type="submit" 
                className="botao-confirmar"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <EastIcon fontSize="large" />
              </motion.button>
            </div>
          </motion.form>
        </div>

        {/* Links auxiliares */}
        <motion.div className="links-login" variants={itemVariants}>
          <motion.a href="/registrar" whileHover={{ scale: 1.05 }}>
            Criar Conta
          </motion.a>
          <motion.a href="/recuperar" whileHover={{ scale: 1.05 }}>
            Esqueceu a Senha?
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Área da imagem */}
      <motion.div 
        className="area-imagem-login"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <img 
          src="/src/assets/images/login-image.png" 
          className="img-login" 
          alt="Imagem Login" 
        />
      </motion.div>
    </motion.div>
  );
}

export default TelaAcesso;
