import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import EastIcon from '@mui/icons-material/East';
import './login.css';

// Variantes de animação
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.2,
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
    navegar('/conta');
  }

  return (
    <motion.div
      className="wrapper-login"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="area-login"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grupo-campos">
          <motion.h1 className="titulo-login" variants={itemVariants}>
            Login
          </motion.h1>
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
            {aviso && (
              <motion.p 
                className="mensagem-erro"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {aviso}
              </motion.p>
            )}
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
        <motion.div 
          className="links-login"
          variants={itemVariants}
        >
          <motion.a 
            href="/registrar"
            whileHover={{ scale: 1.05 }}
          >
            Criar Conta
          </motion.a>
          <motion.a 
            href="/recuperar"
            whileHover={{ scale: 1.05 }}
          >
            Esqueceu a Senha?
          </motion.a>
        </motion.div>
      </motion.div>
      <motion.div 
        className="area-imagem-login"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <img src="/src/assets/images/login-image.png" className="img-login" alt="Imagem Login" />
      </motion.div>
    </motion.div>
  );
}

export default TelaAcesso;