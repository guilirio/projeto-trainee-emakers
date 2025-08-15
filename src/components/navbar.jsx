import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './navbar.css';  

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar o menu mobile
  
  // Função para alternar o menu hambúrguer
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbarn'>
      
      {/* Botão/logo que redireciona para a página inicial */}
      <button 
        className="imagembotaoN" 
        aria-label="Página inicial" 
        onClick={() => window.location.href = '/conta'}
      >
        <img 
          src="/src/assets/images/header.png" 
          className="fotoN" 
          alt="Logo do site" 
        />
      </button>

      {/* Links de navegação */}
      <div className={`barraclicksN ${isMenuOpen ? "show" : ""}`}>
        <a href="/lancamentos">Lançamentos</a>
        <a href="/populares">Populares</a>
        <a href="/generos">Gêneros</a>
        <a href="/promocoes">Promoções</a>
        <a href="/conta">Conta</a>
      </div>

      {/* Barra de pesquisa */}
      <div className={`searchN ${isMenuOpen ? "hidden" : ""}`}>
        <input type="search" placeholder="Pesquisar..." />
        <SearchIcon />
      </div>

      {/* Menu hambúrguer para mobile */}
      <div className="hamburgerN" onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </div>

      {/* Botão do carrinho fixo */}
      <div className="boxofcartN">
        <button className="carrinhoN">
          <ShoppingCartIcon />
        </button>
      </div> 

    </div>
  );
}

export default Navbar;
