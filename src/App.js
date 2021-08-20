import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.scss";

// COMPONENTS
import Home from "./components/pages/home";
import Burger from "./components/layouts/header/burger-menu";
import Cash from "./components/pages/cash";
import Monitor from "./components/pages/monitor";
import Register from "./components/pages/register";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/burger" component={Burger} />
      <Route exact path="/monitor" component={Monitor} />
      <Route exact path="/cash" component={Cash} />
      <Route exact path="/register" component={Register} />
    </Router>
  );
}

export default App;
