import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Header from '../../components/header';
import HomeBtns from '../../components/homeButtons';
import CardProject from '../../components/projectCard';
import BackToStartBtn from '../../components/backToStartBarr';
import dataProjects from '../../database';
import './styles.css';

function Projects() {
  useEffect(() => {
    ScrollReveal().reveal('.area-4-projects', {
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
      <div className='projects-page-container area-4-projects' id='projects'>

        <h2>Meus Projetos</h2>

        <p>Aqui exponho meus principais projetos acadêmicos e pessoais, que estão disponíveis no GitHub.</p>

        <HomeBtns hubOrProjects='gitHub' />

        <div className='show-project-cards'>
          { dataProjects.map((project, index) => <CardProject key={`${project}${index}`} project={project} />) }
        </div>

        <BackToStartBtn id='projects' />
      </div>
    </>
  );
}

export default Projects;