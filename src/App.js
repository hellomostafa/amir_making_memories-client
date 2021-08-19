import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Admin from './components/Admin/Admin';
import MakeOrder from "./components/Admin/MakeOrder/MakeOrder";
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import ServiceDetails from "./components/Home/Services/ServiceDetails/ServiceDetails";
import Nav from './components/Nav/Nav';
import Login from "./components/Pages/Login/Login";


function App() {
  return (
    <div>
    <Router>
      <Nav/>
      <Switch>

        <Route exact path="/">
          <Home/>
        </Route>
        <Route  path="/home">
          <Home/>
        </Route>
        <Route path="/admin/order">
          <Admin/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/makeOrder/:id">
          <MakeOrder/>
        </Route>
        <Route path="/serviceDetails/:id">
          <ServiceDetails/>
        </Route>

      </Switch>
      <Footer/>
    </Router>
    
    </div>
  );
}

export default App;
