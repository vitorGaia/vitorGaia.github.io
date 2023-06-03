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
    navigate('/');
    if (path === 'skills') {
      setToSkills(true);
    }
    setToAbout(true);
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