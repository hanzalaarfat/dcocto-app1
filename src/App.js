import "./App.css";
import Home from "./Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Cards from "./Dashboard/Cards";
import Profile from "./Dashboard/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" exact component={Cards} />
          <Route path="/Team" exact component={Home} />
          <Route path="/Projects" exact component={Home} />
          <Route path="/Calendar" exact component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
