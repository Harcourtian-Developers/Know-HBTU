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
    objectFit: "cover",

    [theme.breakpoints.down("md")]: {
      width: "100vw",
      height: "50vh",
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
      <div class="relative pb-30 flex content-center items-center justify-center min-h-screen-70">
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          id="bg-image"
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-50 bg-black"
          ></span>
        </div>
        <img src={home} className={classes.img} />
      </div>
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
