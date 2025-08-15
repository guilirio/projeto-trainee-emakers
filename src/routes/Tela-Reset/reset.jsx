import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import EastIcon from '@mui/icons-material/East';
import './reset.css';

// ============================
// Variantes de animação do Framer Motion
// ============================
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.2, // anima os filhos com atraso
      when: "beforeChildren" // container aparece antes dos filhos
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 }, // anima entrada de baixo para cima
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

// ============================
// Componente TelaReset
// ============================
function TelaReset() {
  // Estados
  const [email, setEmail] = useState('');
  const [aviso, setAviso] = useState('');
  const navegar = useNavigate();

  // Função para validar e-mail
  function validarEmail(valor) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(valor);
  }

  // Função ao enviar formulário
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
    // Lógica de envio de recuperação
    alert('Instruções de recuperação enviadas para o e-mail!');
  }

  return (
    <motion.div
      className="wrapper-reset"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Área do formulário */}
      <motion.div 
        className="area-reset"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grupo-campos-reset">
          {/* Título */}
          <motion.h1 className="titulo-reset" variants={itemVariants}>
            Recuperar Conta
          </motion.h1>

          {/* Formulário */}
          <motion.form 
            className="formulario-reset" 
            onSubmit={aoEnviar}
            variants={containerVariants}
          >
            <motion.input
              variants={itemVariants}
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
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

            {/* Botão de envio */}
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
        <motion.div 
          className="links-reset"
          variants={itemVariants}
        >
          <motion.a 
            href="/registrar"
            whileHover={{ scale: 1.05 }}
          >
            Criar Conta
          </motion.a>
          <motion.a 
            href="/login"
            whileHover={{ scale: 1.05 }}
          >
            Voltar ao Login
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Área da imagem lateral */}
      <motion.div 
        className="area-imagem-reset"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <img
          src="/src/assets/images/login-image.png"
          className="img-reset"
          alt="Imagem Recuperação"
        />
      </motion.div>
    </motion.div>
  );
}

export default TelaReset;
