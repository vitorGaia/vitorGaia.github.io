import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Skills from '../skills';
import About from '../about';
import Header from '../../components/header';
import HomeBtns from '../../components/homeButtons';
import BackToStartBtn from '../../components/backToStartBarr';
import ContactsBar from '../../components/contactsBarr';
import homeBackground from '../../images/homeBackground.gif';
import './styles.css';

function Home() {
  useEffect(() => {
    ScrollReveal().reveal('.area-1-home', {
      duration: 1500,
      rotate: {
        x: 100,
        y: 0,
        z: 0
      }
    });
  }, []);

  return (
    <>
    <Header />
    <main className='home-page-container area-1-home' id='home'>

      <div className='home-page-content-container'>

        <div className='h1-container'>
          <ContactsBar position='absolute' />

          <h1>Olá, eu sou <br/><span>Vitor Gaia</span><br/></h1>

          <h2>Desenvolvedor Full Stack Web</h2>
        </div>

        <p>Seja bem vindo ao meu potfólio, aqui você verá meus pricipais projetos e tecnologias. Tenho 25 anos, moro em Belém PA, estudo engenharia de Software na Unifatecie e desenvolvimento web na Trybe.</p>

        <HomeBtns hubOrProjects='projects' />
      </div>
      
      <div className='home-iamge-container'>
        <img src={homeBackground} />
      </div>
    </main>

    <Skills />

    <About />

    <BackToStartBtn id='home' />
    </>
  );
}

export default Home;
