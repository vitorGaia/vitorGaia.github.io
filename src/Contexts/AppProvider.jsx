import AppContext from './AppContext';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function AppProvider(props) {
  const { children } = props;
  const location = useLocation();
  const navigate = useNavigate();
  const [toSkills, setToSkills] = useState(false);
  const [toAbout, setToAbout] = useState(false);

  const redirectTo = (path) => {
    if (location.pathname !== '/') {
      navigate('/');
      if (path === 'skills') {
        setToSkills(true);
      } else if ( path === 'about' ) {
      setToAbout(true);
      }
    } else if (path === 'skills') {
      setToSkills(true);
      console.log('lau');
    } else if ( path === 'about' ) {
    setToAbout(true);
    }
  };

  const values = {
    navigate,
    toSkills,
    toAbout,
    setToSkills,
    setToAbout,
    redirectTo,
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