import React from 'react';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { makeStyles, createStyles, Box, Container } from "@material-ui/core";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import Nav from './Nav';

const useStyle = makeStyles({
  main: {
    borderColor: 'red',
    borderWidth: 1,
    borderStyle: 'solid',
  }
});

const LayoutSidebar = (props) => {
  console.log(props);
  const { children } = props
  const classes = useStyle()
  const { path, url } = useRouteMatch();
  return (
    <>
      <Nav />
      <Box component='main' className={classes.main} ml={10} mr={10}>
        <Grid container >
          <Grid
            item
            xs={2}
            container
            className={`${classes.menu}`}
            direction="column"
            spacing={1}
          >
            <Grid item spacing={3}>
              <Link to={`${url}/topic1`}>Topic1</Link>
            </Grid>
            <Grid item spacing={3}>
              <Link to={`${url}/topic2`}>Topic2</Link>
            </Grid>
            <Grid item spacing={3}>
              <Link to={`${url}/topic3`}>Topic3</Link>
            </Grid>
            <Grid item spacing={3}>
              <Link to={`${url}/topic4`}>Topic4</Link>
            </Grid>
          </Grid>
          <Grid item xs className={`${classes.main} ${classes.topics}`}>

            {children}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default LayoutSidebar;