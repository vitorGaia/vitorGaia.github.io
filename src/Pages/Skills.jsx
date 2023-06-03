import { useContext, useEffect, useRef } from 'react';
import ReactIconCloud from '../Components/ReactIconCloud';
import '../Styles/Skills.css';
import AppContext from '../Contexts/AppContext';

function Skills() {
  const { toSkills, setToSkills } = useContext(AppContext);
  const skills = useRef(null);

  useEffect(() => {
    if (toSkills) {
      skills.current.scrollIntoView({ behavior: 'smooth' });
      setToSkills(false);
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