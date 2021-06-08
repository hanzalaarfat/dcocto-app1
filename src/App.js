import "./App.css";
import Home from "./Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Cards from "./Dashboard/Cards";
import Profile from "./Dashboard/Profile/Profile";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute path="/dashboard" exact component={Cards} />
          <PrivateRoute path="/Team" exact component={Home} />
          <PrivateRoute path="/Projects" exact component={Home} />
          <PrivateRoute path="/Calendar" exact component={Profile} />

          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
