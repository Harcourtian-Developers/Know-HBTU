import {
  Box,
  Card,
  CardContent,
  makeStyles,
  Typography,
  Button,
} from "@material-ui/core";
import React from "react";
import tc from "../images/tc.svg";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "24vw",
    height: "50vh",
    backgroundColor: "#BFDBFE",
    [theme.breakpoints.down("md")]: {
      width: "100vw",
      height: "40vh",
    },
  },
}));

const TcCard = () => {
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
          <div className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
            <img src={tc} style={{ height: "50px" }} />
          </div>
          <Box>
            <Typography
              variant="h5"
              style={{
                fontWeight: "bold",

                marginTop: "20px",
                textAlign: "center",
              }}
            >
              Tech Clubs
            </Typography>
            <Typography style={{ marginTop: "10px" }}>
              HBTU aims to promote studies, research & innovation in Engineering
              areas of higher education, to enhance skill development through
              continuing education programme and knowledge and to achieve
              excellence in higher Technical education.
            </Typography>
          </Box>
        </CardContent>
        <Button
          style={{
            width: "100%",
            color: "#3B82F6",
            backgroundColor: "#BFDBFE",
            textTransform: "capitalize",
          }}
        >
          Read More
        </Button>
      </Card>
    </>
  );
};

export default TcCard;
