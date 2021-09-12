import NoSsr from '@material-ui/core/NoSsr';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import User from "./User";
import Topics from "./Topics";
import * as screens from './routes/Screens'
console.log('screens >>;)>>',screens);
import "./styles.css";

const theme = createTheme();
export default function App() {
  return (
    <NoSsr>
    <ThemeProvider theme={theme}>
    <Router>
      <>
        <Switch>
          <Route path="/user" component={User} />
          <Route path="/user/:id" component={User} />
          <Route path="/topics" render={(props)=> <screens.sidebar.layout {...props}><Topics /></screens.sidebar.layout>} title={screens.sidebar.title}/>
          <Route path="/" component={Home} />
        </Switch>
      </>
    </Router>
    </ThemeProvider>
    </NoSsr>
  );
}
