import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import EastIcon from '@mui/icons-material/East';
import './registro.css';

// Variantes de animação
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.4 }
  }
};

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
            Registrar
          </motion.h1>
          <motion.form 
            className="formulario-login" 
            onSubmit={aoEnviar}
            variants={containerVariants}
          >
            {[
              { type: "text", placeholder: "Nome", value: nome, setter: setNome },
              { type: "email", placeholder: "E-mail", value: email, setter: setEmail },
              { type: "text", placeholder: "CPF", value: cpf, setter: setCpf },
              { type: "password", placeholder: "Senha", value: senha, setter: setSenha },
              { type: "password", placeholder: "Confirmar Senha", value: confirmarSenha, setter: setConfirmarSenha }
            ].map((input, index) => (
              <motion.input
                key={index}
                variants={itemVariants}
                type={input.type}
                placeholder={input.placeholder}
                value={input.value}
                onChange={e => input.setter(e.target.value)}
              />
            ))}
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
            href="/login"
            whileHover={{ scale: 1.05 }}
          >
            Já tem conta? Entrar
          </motion.a>
        </motion.div>
      </motion.div>
      <motion.div 
        className="area-imagem-login"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <img src="/src/assets/images/login-image.png" className="img-login" alt="Visual de acesso" />
      </motion.div>
    </motion.div>
  );
}

export default TelaRegistro;