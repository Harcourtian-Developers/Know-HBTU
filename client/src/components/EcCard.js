import {
  Box,
  Card,
  CardContent,
  makeStyles,
  Typography,
  Button,
} from "@material-ui/core";
import React from "react";
import ec from "../images/ec.svg";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "22vw",
    height: "52vh",
    backgroundColor: "#1F2937",
    [theme.breakpoints.down("md")]: {
      width: "100vw",
      height: "30vh",
    },
  },
}));

const EcCard = () => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.card}>
        <CardContent
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              borderRadius: "50%",
              border: "1px solid black",
              backgroundColor: "#3B82F6",
              marginTop: "10px",
              height: "64px",
              width: "64px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={ec} style={{ height: "50px" }} />
          </div>
          <Box>
            <Typography
              variant="h5"
              style={{
                fontWeight: "bold",
                color: "white",
                marginTop: "20px",
                marginLeft: "70px",
              }}
            >
              E-Cell HBTU
            </Typography>
            <Typography style={{ color: "white", marginTop: "10px" }}>
              HBTU aims to promote studies, research & innovation in Engineering
              areas of higher education, to enhance skill development through
              continuing education programme and knowledge and to achieve
              excellence in higher Technical education.
            </Typography>
          </Box>
        </CardContent>
        <Button
          variant="contained"
          style={{
            width: "100%",
            color: "#3B82F6",
            backgroundColor: "#1F2937",
          }}
        >
          Read More
        </Button>
      </Card>
    </>
  );
};

export default EcCard;
