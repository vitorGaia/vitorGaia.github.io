import Header from '../Components/Header';
import HomeBtns from '../Components/HomeBtns';
import Skills from './Skills';
import '../Styles/Home.css';
import About from './About';
import BackToStartBtn from '../Components/BackToStartBtn';
import ContactsBar from '../Components/ContactsBar';
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';
import homeBackground from '../Images/homeBackground.gif';

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
    <main className='home-page-container' id='home-section'>
      <Header />

      <div className='home-page-content-container area-1-home'>

        <div className='h1-container'>
          <ContactsBar position='absolute' />

          <h1>Olá, eu sou <br/><span>Vitor Gaia</span><br/></h1>

          <h2>Desenvolvedor Full Stack Web</h2>
        </div>

        <p>Tenho 25 anos, moro em Belém PA, estudo engenharia de Software na Unifatecie e desenvolvimento web na Trybe.</p>

        <HomeBtns hubOrProjects='projects' />
      </div>
      
      <div className='home-iamge-container'>
        <img src={homeBackground} />
      </div>
    </main>

    <Skills />

    <About />

    <BackToStartBtn id="#home-section" />
    </>
  );
}

export default Home;
