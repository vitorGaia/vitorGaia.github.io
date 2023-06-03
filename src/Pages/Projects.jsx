import Header from '../Components/Header';
import HomeBtns from '../Components/HomeBtns';
import dataProjects from '../dataProjects';
import CardProject from '../Components/CardProject';
import '../Styles/Projects.css';
import BackToStartBtn from '../Components/BackToStartBtn';

function Projects() {
  return (
    <div className='projects-page-container' id='projects-section'>
      <Header />

      <h2>Meus Projetos</h2>

      <p>Aqui exponho meus principais projetos acadêmicos e pessoais, que estão disponíveis no GitHub.</p>

      <HomeBtns hubOrProjects='gitHub' />

      <div className='show-project-cards'>
        { dataProjects.map((project, index) => <CardProject key={`${project}${index}`} project={project} />) }
      </div>

      <BackToStartBtn id='#projects-section' />
    </div>
  );
}

export default Projects;