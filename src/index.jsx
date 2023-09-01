import { Route, Routes } from 'react-router';
import ScrollReveal from 'scrollreveal';
import Home from './pages/home';
import Projects from './pages/projects';
import Contacts from './pages/contacts';

function App() {
  window.sr = ScrollReveal({ reset: true });

  return (
    <Routes>
      <Route exact path='/' element={ <Home /> } />

      <Route exact path='/projects' element={ <Projects /> } />

      <Route exact path='/contacts' element={ <Contacts/> } />
    </Routes>
  )
}

export default App;
