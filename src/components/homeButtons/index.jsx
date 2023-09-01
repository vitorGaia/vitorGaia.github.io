import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function HomeBtns(props) {
  const { hubOrProjects } = props;
  const navigate = useNavigate();

  return (
    <div className='home-btns-container'>
      <a href='#' onClick={ () => navigate('/contacts') }>Fale Comigo</a>
      
      <a
        href='#'
        onClick={ () => hubOrProjects === 'projects'
        ? navigate('/projects')
        : window.open('https://github.com/vitorGaia', '_blank')}
      >
        { hubOrProjects === 'projects' ? 'Meus Projetos' : 'Ver no GitHub' }
      </a>
    </div>
  );
}

HomeBtns.propTypes = {
  hubOrProjects: PropTypes.string.isRequired,
}

export default HomeBtns;