import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './navbar.css';  


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbarn'>
        <button className="imagembotaoN" aria-label="Página inicial">
        <img src="/src/assets/images/header.png" className="fotoN" alt="Logo do site" />
        </button>


      <div className={`barraclicksN ${isMenuOpen ? "show" : ""}`}>
        <a href="/lancamentos">Lançamentos</a>
        <a href="/populares">Populares</a>
        <a href="/Generos">Gêneros</a>
        <a href="/Promocoes">Promoções</a>
        <a href="/conta">Conta</a>
      </div>

      <div className={`searchN ${isMenuOpen ? "hidden" : ""}`}>
        <input type="search" placeholder="Pesquisar..." />
        <SearchIcon />
      </div>

      <div className="hamburgerN" onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </div>
      <div className="boxofcartN">
        <button className="carrinhoN"><ShoppingCartIcon /></button>
      </div> 
    </div>
  );
}

export default Navbar;