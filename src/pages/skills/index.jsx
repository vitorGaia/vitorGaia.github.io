import { useContext, useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import ReactIconCloud from '../../components/iconCloud';
import AppContext from '../../contexts/AppContext';
import './styles.css';

function Skills() {
  const { toSkills, setToSkills, scrollToElement } = useContext(AppContext);
  const skills = useRef(null);

  useEffect(() => {
    ScrollReveal().reveal('.area-2-skills', {
      duration: 1500,
      rotate: {
        x: 100,
        y: 0,
        z: 0
      }
    });
  }, []);

  useEffect(() => {
    if (location.pathname === '/' && toSkills) {
      scrollToElement('skills');
    }
    setToSkills(false);
  }, [scrollToElement, setToSkills, toSkills]);

  return (
    <div className='skills-page-container area-2-skills' id='skills' ref={skills}>
      <div className='skills-infos-container'>
        <h2>Habilidades Técnicas</h2>

        <p>Desenvolvimento inteligente de aplicações web robustas e auto-gerenciáveis. Crio soluções personalizadas e escaláveis para atender às suas necessidades específicas, com expertise técnica e práticas de desenvolvimento de ponta.<br/><br/> Atualmente minhas principais skills são <span>JavaScript</span>, <span>React</span>, <span>Jest</span>, <span>Node</span>, <span>MySQL</span> e estou adquirindo proficiência com <span>TypeScript</span>. Na nuvem de ícones você pode ver tecnologias secundárias e bibliotecas que eu já usei.</p>
      </div>

      <ReactIconCloud />
    </div>
  );
}

export default Skills;