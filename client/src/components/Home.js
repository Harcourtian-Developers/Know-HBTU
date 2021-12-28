import React from "react";
import home from "../images/home.jpg";
import { Box, makeStyles } from "@material-ui/core";
import AlumniCard from "./AlumniCard";
import ScCard from "./ScCard";
import TcCard from "./TcCard";
import EcCard from "./EcCard";
import Explore from "./Explore";
import ExtraCards from "./ExtraCards";

const useStyles = makeStyles((theme) => ({
  img: {
    width: "100vw",
    height: "100vh",
    [theme.breakpoints.down("md")]: {
      width: "100vw",
      height: "30vh",
    },
  },
  cards: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: "10px",
    marginBottom: "30px",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "space-between",
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <img src={home} className={classes.img} />
      <ExtraCards />
      <Explore />
      <Box className={classes.cards}>
        <AlumniCard />
        <ScCard />
        <TcCard />
        <EcCard />
      </Box>
    </>
  );
};

export default Home;
