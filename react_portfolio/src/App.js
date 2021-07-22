import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar'
import AboutMe from './components/aboutme'
import Contact from './components/contact'
import Footer from './components/footer'
import Projects from './components/projects'
import Resume from './components/resume'

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div>
    <Router>
      <header>James Corcoran
        {/* <Route exact path ='/navbar'> */}
          <NavBar />
        {/* </Route> */}
      </header>

      <Route exact path ='/'> 
        <AboutMe />
      </Route>

      <Route exact path ='/projects'>
        <Projects />
      </Route>

      <Route exact path ='/resume'>
        <Resume />
      </Route>

      <Route exact path ='/contact'>
        <Contact />
      </Route>

      <footer>
        <Footer />
      </footer>

    </Router>
    </div>
  );
}

export default App;
