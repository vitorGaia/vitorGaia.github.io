import { useContext, useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import AppContext from '../../Contexts/AppContext';
import TimeLine from '../../components/timeLine/TimeLine';
import './styles.css';

function About() {

  const { toAbout, setToAbout, scrollToElement } = useContext(AppContext);
  const about = useRef(null);

  useEffect(() => {
    ScrollReveal().reveal('.area-3-about', {
      duration: 1500,
      rotate: {
        x: 100,
        y: 0,
        z: 0
      }
    });
  }, []);

  useEffect(() => {
    if (location.pathname === '/' && toAbout) {
      scrollToElement('about');
    }
    setToAbout(false);
  }, [scrollToElement, setToAbout, toAbout]);

  return (
    <div className="about-page-container area-3-about" id='about' ref={about}>

      <div className='about-titles-container'>
        <h2>Sobre Mim</h2>

        <p>Estou em transição de carreira. Motivado pela minha paixão por tecnologia, desejo de adquirir novas habilidades/conhecimentos e a busca por uma carreira com maior potencial de crescimento e estabilidade financeira. Estou adquirindo novas habilidades através de cursos, treinamentos e estudos autônomos. Embora seja um desafio, estou determinado a alcançar meus objetivos e construir uma carreira gratificante na área de tecnologia.</p>
      </div>

      <TimeLine />
    </div>
  );
}

export default About;