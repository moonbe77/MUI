import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import User from "./User";
import Topics from "./Topics";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <>
        <Nav />
        <Switch>
          <Route path="/user" component={User} />
          <Route path="/user/:id" component={User} />
          <Route path="/topics" component={Topics} />
          <Route path="/" component={Home} />
        </Switch>
      </>
    </Router>
  );
}
