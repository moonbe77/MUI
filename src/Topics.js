import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { makeStyles, createStyles, Box, Container } from "@material-ui/core";
import Grid, { GridSpacing } from "@material-ui/core/Grid";

const useStyle = makeStyles({
  root: {},
  main: {
    textAlign: "center"
  },
  topics: {
    border: "1px solid red"
  },
  menu: {
    border: "1px solid blue",
    backgroundColor: "rgb(221, 218, 218)",
    borderRadius: 8
  }
});

const Topics = () => {
  const { path, url } = useRouteMatch();
  const classes = useStyle();
  return (
    <Switch>
      <Route exact path={path}>
        <h3> Render topic</h3>
      </Route>
      <Route path={`${path}/topic1`} component={Topic1} />
      <Route path={`${path}/topic2`} component={Topic2} />
      <Route path={`${path}/topic3`} component={Topic3} />
      <Route path={`${path}/topic4`} component={Topic4} />
    </Switch>
  );
};
export default Topics;

const Topic1 = () => (
  <>
    <h3>TOPIC 1</h3>
  </>
);
const Topic2 = () => (
  <>
    <h3>TOPIC 2</h3>
  </>
);
const Topic3 = () => (
  <>
    <h3>TOPIC 3</h3>
  </>
);
const Topic4 = () => (
  <>
    <h3>TOPIC 4</h3>
  </>
);
