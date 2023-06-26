import ContactsBar from '../Components/ContactsBar';
import Header from '../Components/Header';
import ScrollReveal from 'scrollreveal';
import '../Styles/Contacts.css';
import { useEffect } from 'react';
import contactsBackground from '../Images/contactsBackground.gif';

function Contacts() {
  useEffect(() => {
    ScrollReveal().reveal('.area-5-contacts', {
      duration: 1500,
      rotate: {
        x: 100,
        y: 0,
        z: 0
      }
    });
  }, []);

  return (
    <div className='contacts-page-container area-5-contacts'>
      <Header />
      <div className='contacts-titles-container'>
        <h2>Contatos</h2>
        <p>Vamos trabalhar juntos?</p>
        <img src={ contactsBackground } />
      </div>

      <div className='show-contact-card'>
        <ContactsBar position='unset'/>

        <form className='contact-form'>
          <div>
            <input
              type='text'
              placeholder='Nome'
            />
            <input
              type='email'
              placeholder='Email'
            />
          </div>
          
          <input
            type='text'
            placeholder='Assunto'
          />
          <textarea
            type='text'
            placeholder='Mensagem'
          />

          <button type='button'>Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Contacts;