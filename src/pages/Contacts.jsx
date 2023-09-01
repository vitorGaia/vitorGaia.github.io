import ContactsBar from '../components/ContactsBar';
import Header from '../components/Header';
import ScrollReveal from 'scrollreveal';
import '../Styles/Contacts.css';
import { useContext, useEffect, useState } from 'react';
import contactsBackground from '../Images/contactsBackground.gif';
import AppContext from '../Contexts/AppContext';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert';

function Contacts() {
  const { formValues, setFormValues } = useContext(AppContext);
  const [disableBtn, setDisablebtn] = useState(true);

  const SERVICE_ID = 'service_ak1civh';
  const TEMPLATE_ID = 'template_g3kog9q';
  const USER_ID = '5-w1CXGpaALYEp7ur';

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formValues.nome,
      from_email: formValues.email,
      subject: formValues.assunto,
      message: formValues.mensagem
    };

    try {
      const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);
      console.log('Email enviado com sucesso!', response);

      setFormValues({
        nome: '',
        email: '',
        assunto: '',
        mensagem: ''
      });

      Swal('Sucesso!', 'O email foi enviado com sucesso.', 'success');
    } catch (error) {
      console.error('Erro ao enviar o email:', error);

      Swal('Erro!', 'Ocorreu um erro ao enviar o email. Por favor, tente novamente.', 'error');
    }
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

            <button type='submit' disabled={disableBtn}>
              Enviar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contacts;