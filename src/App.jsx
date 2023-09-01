import { Route, Routes } from 'react-router';
import ScrollReveal from 'scrollreveal';
import Home from './pages/Home';
import Projects from '../src/pages/Projects';
import Contacts from './pages/Contacts';

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
