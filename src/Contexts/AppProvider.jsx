import AppContext from './AppContext';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AppProvider(props) {
  const { children } = props;
  const navigate = useNavigate();
  const [toSkills, setToSkills] = useState(false);
  const [toAbout, setToAbout] = useState(false);

  const redirectTo = (path) => {
    if (path === 'skills') {
      setToSkills(true);
    }
    if (path === 'about') {
      setToAbout(true);
    }
  };

  const scrollToElement = (id) => {
    const targetElement = document.getElementById(id);
    const offsetTop = targetElement.offsetTop;
    const offset = 0;

    window.scrollTo({
      top: offsetTop - offset,
      behavior: 'smooth'
    });
  };

  const values = {
    navigate,
    toSkills,
    toAbout,
    setToSkills,
    setToAbout,
    redirectTo,
    scrollToElement
  };

  return (
    <AppContext.Provider value={ values }>
      { children }
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

export default AppProvider;