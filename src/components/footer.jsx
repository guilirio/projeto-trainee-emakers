import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>GameHub</h3>
        <p>A aventura que você espera começa agora.</p>
      </div>
      <div className="footer-section">
        <h4>Explorar</h4>
        <div className="content">
          <a href="/">Início</a>
          <a href="/popular">Populares</a>
          <a href="/account">Conta</a>
          <p>© 2025 Game Hub | By Emakers Junior</p>
        </div>
      </div>
      <div className="footer-section">
        <h4>Contato</h4>
        <p className="text"><EmailIcon /> gamehub@emakers.com</p>
        <p className="text"><PhoneIcon /> (31) 91234-5678</p>
        <p className="text"><LocationOnIcon /> Shopping X, Lavras - MG</p>
      </div>
    </footer>
  );
};

export default Footer;