import { useState, useContext, useEffect } from 'react';
import '../Styles/Header.css';
import AppContext from '../Contexts/AppContext';
import { Link } from 'react-router-dom';

function Header() {
  const { navigate, redirectTo } = useContext(AppContext);
  const [sideBar, setSideBar] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => setScreenWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const style = { display: screenWidth < 1000 && !sideBar && 'none' };

  return (
    <header className='header-container'>
      <a href="#" onClick={ () => navigate('/')}>Gaia.</a>

      <i
        className='bx bx-menu menu-icon'
        onClick={ () => setSideBar(true) }
      >
      </i>

      <nav style={ style }>
        <i
          className='bx bx-chevrons-right close-menu-icon'
          onClick={ () => setSideBar(false) }
        >
        </i>

        <a href="#" onClick={ () => navigate('/')}>Principal</a>

        <Link to={'/'} onClick={() => redirectTo('skills')}>Habilidades</Link>

        <Link to={'/'} onClick={() => redirectTo('about')}>Sobre Mim</Link>

        <a href="#" onClick={ () => navigate('/projects')}>Projetos</a>
        
        <a href="#" onClick={ () => navigate('/contacts') }>Contatos</a>
      </nav>
    </header>
  );
}

export default Header;