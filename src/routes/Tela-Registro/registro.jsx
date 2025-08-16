import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import EastIcon from '@mui/icons-material/East';
import './registro.css';

// ============================
// Variantes de animação do Framer Motion
// ============================
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1, // anima os filhos com atraso
      when: "beforeChildren" // garante que container apareça antes dos filhos
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 }, // anima entrada dos itens de baixo para cima
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.4 }
  }
};

// ============================
// Componente TelaRegistro
// ============================
function TelaRegistro() {
  // Estados dos inputs
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [cpf, setCpf] = useState('');
  const [aviso, setAviso] = useState('');

  const navegar = useNavigate();

  // Validação de e-mail
  function validarEmail(valor) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(valor);
  }

  // Função ao enviar formulário
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
      {/* Área do formulário */}
      <motion.div 
        className="area-login"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grupo-campos">
          {/* Título */}
          <motion.h1 className="titulo-login" variants={itemVariants}>
            Registrar
          </motion.h1>

          {/* Formulário */}
          <motion.form 
            className="formulario-login" 
            onSubmit={aoEnviar}
            variants={containerVariants}
          >
            {/* Mapeia os inputs do formulário */}
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

      {/* Área da imagem lateral */}
      <motion.div 
        className="area-imagem-login"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <img 
          src="/src/assets/images/imagem-logo-hero.png" 
          className="img-login" 
          alt="Visual de acesso" 
        />
      </motion.div>
    </motion.div>
  );
}

export default TelaRegistro;
