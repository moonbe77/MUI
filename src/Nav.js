import React from "react";
import { Link } from "react-router-dom";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(2)
      }
    }
  })
);

const Nav = () => {
  const classes = useStyles();
  return (
    <nav className={`${classes.root} navBar`}>
      <ul>
        <li>
          <Link to="/">
            <Button color="primary" disableElevation>
              Home
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/user">
            <Button variant="outlined" color="secondary">
              User
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/topics">
            <Button variant="text">Topics</Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
