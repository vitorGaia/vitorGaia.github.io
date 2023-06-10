import Home from './Pages/Home';
import { Route, Routes } from 'react-router';
import Projects from './Pages/Projects';
import Contacts from './Pages/Contacts';
import ScrollReveal from 'scrollreveal';

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
