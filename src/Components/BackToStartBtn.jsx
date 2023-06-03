import ContactsBar from '../Components/ContactsBar';
import PropTypes from 'prop-types';
import '../Styles/BackToStartBtn.css';

function BackToStartBtn({ id }) {
  return (
    <div className='back-to-start-container'>
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