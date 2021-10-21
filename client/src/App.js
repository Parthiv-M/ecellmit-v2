import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// importing pages
import LandingPage from "./pages/landingPage"; 
import ResourcesPage from "./pages/resourcesPage";
import ResourcePage from "./pages/resourcePage";
import HallOfFamePage from "./pages/hallOfFame";
import BlogPins from "./pages/blogPins";
import NavBar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <Route exact path="/wall-of-fame" component={HallOfFamePage}></Route>
          <Route exact path="/resources" component={ResourcesPage}></Route>
          <Route exact path="/resources/:type" component={ResourcePage}></Route>
          <Route exact path="/blog" component={BlogPins}></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
