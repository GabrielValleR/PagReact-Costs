import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Conteiner from './components/layout/Conteiner';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Projects from './components/pages/Projects';


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Conteiner customClass="min-height">
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/company">
            <Company/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
          <Route exact path="/projects">
            <Projects/>
          </Route>
          <Route exact path="/newproject">
            <NewProject/>
          </Route>
        </Conteiner>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
