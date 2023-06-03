import PropTypes from 'prop-types';
import '../Styles/CardProject.css';
import { Link } from 'react-router-dom';

function CardProject({ project }) {
  const { projectName, deployLink, repositoryLink, thumbNail, description, usedSkills } = project;

  const renderTags = usedSkills.map((icon, index) => <i key={`${icon}${index}`} className={`bx bxl-${icon} tecs-icon`}></i>);

  return (
    <div className='card-container'>
      <img alt='project thumb' src={thumbNail} />

      <h3>{projectName}</h3>

      <div className='card-links-container'>
        <Link to={repositoryLink} target="_blank">
          <i className='bx bxl-github redirect-link'></i>
        </Link>

        <Link to={deployLink} target="_blank">
          <i className='bx bx-link-external redirect-link'></i>
        </Link>
      </div>

      <p><span>Descrição:</span> {description}</p>

      <div className='tecs-container'>{renderTags}</div>
    </div>
  );
}

CardProject.propTypes = {
  project: PropTypes.shape({
    projectName: PropTypes.string.isRequired,
    deployLink: PropTypes.string.isRequired,
    repositoryLink: PropTypes.string.isRequired,
    thumbNail: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    usedSkills: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default CardProject;