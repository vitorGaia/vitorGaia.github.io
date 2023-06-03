import PropTypes from 'prop-types';
import '../Styles/ContactsBar.css';
import { useContext } from 'react';
import AppContext from '../Contexts/AppContext';

function ContactsBar({ position }) {
  const { navigate } = useContext(AppContext);
  const style = { position: position };

  return (
    < div className='contacts-bar' style={ style }>
      <a  href="#" onClick={ () => navigate('/contacts') }>
        <i className='bx bx-envelope'></i>
      </a>

      <a href='https://api.whatsapp.com/send?phone=5541998271561' target="_blank" rel="noreferrer">
      <i className='bx bxl-whatsapp'></i>
      </a>
    
      <a href="https://www.linkedin.com/in/vitor-gaia-dev/" target="_blank" rel="noreferrer">
        <i className='bx bxl-linkedin' ></i>
      </a>
    </div>
  );
}

ContactsBar.propTypes = {
  position: PropTypes.string.isRequired,
};

export default ContactsBar;