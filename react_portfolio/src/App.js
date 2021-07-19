import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar'
import AboutMe from './components/aboutme'
import Contacts from './components/contacts'
import Footer from './components/footer'
import Projects from './components/projects'
import Resume from './components/resume'

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>

      {/* <Route exact path ='/navbar'> */}
        <NavBar />
      {/* </Route> */}

      {/* <Route exact path ='/aboutme'>  */}
        <AboutMe />
      {/* </Route> */}

    </Router>
  );
}

export default App;
