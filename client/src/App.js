import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// importing pages
import LandingPage from "./pages/landingPage"; 
import ResourcesPage from "./pages/resourcesPage";
import HallOfFamePage from "./pages/hallOfFame";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <Route exact path="/hall-of-fame" component={HallOfFamePage}></Route>
          <Route exact path="/resources" component={ResourcesPage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
