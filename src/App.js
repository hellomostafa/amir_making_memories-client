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
import { AuthProvider } from "./components/Pages/Sign/Auth/useAuth";
import Login from "./components/Pages/Sign/Login";
import SignUp from "./components/Pages/Sign/SignUp";



function App() {
  return (
    <AuthProvider>
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
        <Route path="/signup">
          <SignUp/>
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
    
    </AuthProvider>
  );
}

export default App;
