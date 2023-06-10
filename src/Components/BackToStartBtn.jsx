import ContactsBar from '../Components/ContactsBar';
import PropTypes from 'prop-types';
import ScrollReveal from 'scrollreveal';
import '../Styles/BackToStartBtn.css';
import { useEffect } from 'react';

function BackToStartBtn({ id }) {
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

      <a href={id}>
        <i className='bx bx-up-arrow-alt' ></i>
      </a>
      
      <span>Gaia. © 2023</span>
    </div>
  );
}

BackToStartBtn.propTypes = {
  id: PropTypes.string.isRequired,
};

export default BackToStartBtn;