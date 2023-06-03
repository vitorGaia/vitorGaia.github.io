import Header from '../Components/Header';
import HomeBtns from '../Components/HomeBtns';
import Skills from './Skills';
import '../Styles/Home.css';
import About from './About';
import BackToStartBtn from '../Components/BackToStartBtn';
import ContactsBar from '../Components/ContactsBar';

function Home() {
  return (
    <>
    <main className='home-page-container' id='home-section'>
      <Header />

      <div className='home-page-content-container'>

        <div className='h1-container'>
          <ContactsBar position='absolute' />

          <h1>Olá, eu sou <br/><span>Vitor Gaia</span><br/></h1>

          <h2>Desenvolvedor Full Stack Web</h2>
        </div>

        <p>Tenho 25 anos, moro em Belém PA, estudo engenharia de Software na Unifatecie e desenvolvimento web na Trybe.</p>

        <HomeBtns hubOrProjects='projects' />
      </div>
    </main>

    <Skills />

    <About />

    <BackToStartBtn id="#home-section" />
    </>
  );
}

export default Home;
