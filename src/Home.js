import { makeStyles, createStyles, Box, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(5),
        color: "red",
        border: "1px solid red"
      }
    }
  })
);

const Home = () => {
  const classes = useStyles();

  return (
    <Box>
      <Container maxWidth="md" className={`${classes.root}`}>
        <h1>HOME</h1>
      </Container>
    </Box>
  );
};

export default Home;
