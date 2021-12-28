import {
  Box,
  Card,
  CardContent,
  makeStyles,
  Typography,
  Button,
} from "@material-ui/core";
import React from "react";
import sc from "../images/subc.svg";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "24vw",
    height: "50vh",
    backgroundColor: "#FEF9C3",
    [theme.breakpoints.down("md")]: {
      width: "100vw",
      height: "40vh",
    },
  },
}));

const ScCard = () => {
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
            <img src={sc} style={{ height: "50px" }} />
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
              Sub-Councils
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
            backgroundColor: "#FEF9C3",
            textTransform: "capitalize",
          }}
        >
          Read More
        </Button>
      </Card>
    </>
  );
};

export default ScCard;
