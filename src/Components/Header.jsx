import { useState, useContext } from 'react';
import '../Styles/Header.css';
import AppContext from '../Contexts/AppContext';

function Header() {
  const { navigate, redirectTo } = useContext(AppContext);
  const [sideBar, setSideBar] = useState(false);

  const style = { display: !sideBar && 'none' };

  return (
    <header className='header-container'>
      <a href="#" onClick={ () => navigate('/')}>Gaia.</a>

      <i className='bx bx-menu menu-icon' onClick={ () => setSideBar(true) }></i>

      <nav style={ style }>
        <i className='bx bx-chevrons-right close-menu-icon' onClick={ () => setSideBar(false) }></i>

        <a href="#" onClick={ () => navigate('/')}>Principal</a>

        <a href="/#skills" onClick={() => redirectTo('skills')}>Habilidades</a>

        <a href='/#about' onClick={() => redirectTo('about')}>Sobre Mim</a>

        <a href="#" onClick={ () => navigate('/projects')}>Projetos</a>
        
        <a href="#" onClick={ () => navigate('/contacts') }>Contatos</a>
      </nav>
    </header>
  );
}

export default Header;