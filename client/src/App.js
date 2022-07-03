import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import HeaderNavBar from "./HeaderNavBar";
import Country from "./Country";
import LogIn from "./LogIn";

function App() {
  return (
    <div className="App">
      <center>
        <h1>Plannit</h1>
      </center>
      <Router>
        <HeaderNavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="/country">
            <Country />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
