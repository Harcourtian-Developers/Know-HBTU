import React from "react";
import home from "../images/home.jpg";
import { makeStyles } from "@material-ui/core";
import AlumniCard from "./AlumniCard";
import ScCard from "./ScCard";
import TcCard from "./TcCard";
import EcCard from "./EcCard";

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
    marginTop: "30px",
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
      <div className={classes.cards}>
        <AlumniCard />
        <ScCard />
        <TcCard />
        <EcCard />
      </div>
    </>
  );
};

export default Home;
