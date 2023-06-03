import ContactsBar from '../Components/ContactsBar';
import Header from '../Components/Header';
import '../Styles/Contacts.css';

function Contacts() {
  return (
    <div className='contacts-page-container'>
      <Header />
      
      <h2>Contatos</h2>
      <p>Vamos trabalhar juntos?</p>

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