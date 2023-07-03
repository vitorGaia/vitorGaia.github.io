import ContactsBar from '../Components/ContactsBar';
import Header from '../Components/Header';
import ScrollReveal from 'scrollreveal';
import '../Styles/Contacts.css';
import { useContext, useEffect, useState } from 'react';
import contactsBackground from '../Images/contactsBackground.gif';
import AppContext from '../Contexts/AppContext';

function Contacts() {
  const { formValues, setFormValues } = useContext(AppContext);
  const [desableBtn, setDisablebtn] = useState(true);

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

  useEffect(() => {
    const validateInputs = () => {
      const values = Object.values(formValues);
      const test = values.every((value) => value !== undefined && value.length >= 5);
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const result = emailRegex.test(formValues.email) && test;
      setDisablebtn(!result);
    };

    validateInputs();
  }, [formValues]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar o formulário
  };

  return (
    <>
      <Header />
      <div className='contacts-page-container area-5-contacts'>
        <div className='contacts-titles-container'>
          <h2>Contatos</h2>
          <p>Vamos trabalhar juntos?</p>
          <img src={ contactsBackground } />
        </div>

        <div className='show-contact-card'>
          <ContactsBar position='unset'/>

          <form className='contact-form' onSubmit={handleSubmit}>
            <div>
              <input
                type='text'
                placeholder='Nome'
                name='nome'
                value={formValues.nome}
                onChange={handleChange}
              />
              <input
                type='email'
                placeholder='Email'
                name='email'
                value={formValues.email}
                onChange={handleChange}
              />
            </div>

            <input
              type='text'
              placeholder='Assunto'
              name='assunto'
              value={formValues.assunto}
              onChange={handleChange}
            />
            <textarea
              type='text'
              placeholder='Mensagem'
              name='mensagem'
              value={formValues.mensagem}
              onChange={handleChange}
            />

            <button disabled={desableBtn}>
              Enviar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contacts;