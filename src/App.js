import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';


function App() {
  return (
    <div>
    <Router>
      <Nav/>
      <Switch>

        <Route exact path="/">
          <Home/>
        </Route>

      </Switch>
      <Footer/>
    </Router>
    
    </div>
  );
}

export default App;
