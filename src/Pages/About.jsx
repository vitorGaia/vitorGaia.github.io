import { useContext, useEffect, useRef } from 'react';
import TimeLine from '../Components/TimeLine';
import '../Styles/About.css';
import AppContext from '../Contexts/AppContext';

function About() {

  const { toAbout, setToAbout } = useContext(AppContext);
  const about = useRef(null);

  useEffect(() => {
    if (toAbout) {
      const test = setTimeout(() => {
        about.current.scrollIntoView({ behavior: 'smooth' });
        setToAbout(false);
        clearTimeout(test);
      }, 100);
    }
  }, [setToAbout, toAbout]);

  return (
    <div className="about-page-container" id='about' ref={about}>
      <h2>Sobre Mim</h2>

      <p>Estou em transição de carreira. Motivado pela minha paixão por tecnologia, desejo de adquirir novas habilidades e conhecimentos e a busca por uma carreira com maior potencial de crescimento e estabilidade financeira. Estou adquirindo novas habilidades através de cursos, treinamentos e estudos autônomos. Embora seja um desafio, estou determinado(a) a alcançar meus objetivos e construir uma carreira gratificante na área de tecnologia.</p>

      <TimeLine />
    </div>
  );
}

export default About;