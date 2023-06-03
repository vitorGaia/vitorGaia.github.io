import { useContext, useEffect, useRef } from 'react';
import ReactIconCloud from '../Components/ReactIconCloud';
import AppContext from '../Contexts/AppContext';
import '../Styles/Skills.css';

function Skills() {
  const { toSkills, setToSkills } = useContext(AppContext);
  const skills = useRef(null);

  useEffect(() => {
    if (toSkills) {
      const test = setTimeout(() => {
        skills.current.scrollIntoView({ behavior: 'smooth' });
        setToSkills(false);
        clearTimeout(test);
      }, 100);
    }
  }, [setToSkills, toSkills]);

  return (
    <div className='skills-page-container' id='skills' ref={skills}>
      <h2>Habilidades Técnicas</h2>

      <p>Desenvolvimento inteligente de aplicações web robustas e auto-gerenciáveis. Crio soluções personalizadas e escaláveis para atender às suas necessidades específicas. Com expertise técnica e práticas de desenvolvimento de ponta.</p>

      <ReactIconCloud />
    </div>
  );
}

export default Skills;