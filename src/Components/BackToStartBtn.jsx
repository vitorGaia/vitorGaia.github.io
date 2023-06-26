import ContactsBar from '../Components/ContactsBar';
import PropTypes from 'prop-types';
import ScrollReveal from 'scrollreveal';
import '../Styles/BackToStartBtn.css';
import { useContext, useEffect } from 'react';
import AppContext from '../Contexts/AppContext';

function BackToStartBtn({ id }) {
  const { redirectTo } = useContext(AppContext);

  useEffect(() => {
    ScrollReveal().reveal('.area-6-backToStart', {
      duration: 1500,
      rotate: {
        x: 100,
        y: 0,
        z: 0
      }
    });
  }, []);

  return (
    <div className='back-to-start-container area-6-backToStart'>
      <ContactsBar position='unset' />

      <a href='#'>
        <i className='bx bx-up-arrow-alt' onClick={ () => redirectTo(id) } ></i>
      </a>
      
      <span>Gaia. © 2023</span>
    </div>
  );
}

BackToStartBtn.propTypes = {
  id: PropTypes.string.isRequired,
};

export default BackToStartBtn;