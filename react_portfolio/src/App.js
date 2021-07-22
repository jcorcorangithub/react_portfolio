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

      
        
      {/* <Route exact path ='/aboutme'>  */}
        <AboutMe />
      {/* </Route> */}

    </Router>
    </div>
  );
}

export default App;
