import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  Drawer,
  List,
  useTheme,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpeg";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import clsx from "clsx";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
const drawerWidth = 150;

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    alignItems: "center",
    height: "15vh",
    [theme.breakpoints.down("md")]: {
      width: "100vw",
      height: "10vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
  },
  image: {
    height: "100px",
    [theme.breakpoints.down("md")]: {
      height: "70px",
    },
  },
  icon: {
    fontSize: "100px",
    [theme.breakpoints.down("md")]: {
      fontSize: "50px",
    },
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    display: "flex",
    flexDirection: "column",
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));

const Header = () => {
  const classes = useStyles();
  const [menu, setMenu] = useState(window.innerWidth > 1400);
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const updateMedia = () => {
    setMenu(window.innerWidth > 1400);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  return (
    <>
      <AppBar
        style={{
          backgroundColor: "white",
          color: "black",
          position: "static",
        }}
      >
        <Toolbar className={classes.toolbar}>
          <img src={logo} className={classes.image} />
          {menu && (
            <>
              <Typography variant="h6">
                <Link
                  to="/"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                    marginLeft: "750px",
                    fontWeight: "bold",
                  }}
                >
                  Home
                </Link>
              </Typography>
              <Typography variant="h6">
                <Link
                  to="/team"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                    marginLeft: "30px",
                    fontWeight: "bold",
                  }}
                >
                  Our Team
                </Link>
              </Typography>
              <Button variant="contained" style={{ marginLeft: "30px" }}>
                <a
                  href="https://erp.hbtu.ac.in/"
                  target="_blank"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  HBTU ERP
                </a>
              </Button>
              <Button variant="contained" style={{ marginLeft: "30px" }}>
                <a
                  href="https://hbtu.ac.in/"
                  target="_blank"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Official Site
                </a>
              </Button>
            </>
          )}
          {!menu && (
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerOpen}
                className={clsx(open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <List style={{ width: "100%" }}>
          <Typography>
            <Link
              to="/"
              style={{
                color: "inherit",
                textDecoration: "none",
                width: "100%",
                textAlign: "center",
                marginLeft: "40px",
              }}
            >
              Home
            </Link>
          </Typography>
          <Typography>
            <Link
              to="/team"
              style={{
                color: "inherit",
                textDecoration: "none",
                width: "100%",
                textAlign: "center",
                marginLeft: "40px",
              }}
            >
              Our Team
            </Link>
          </Typography>
          <Button variant="contained" style={{ width: "100%" }}>
            <a
              href="https://erp.hbtu.ac.in/"
              target="_blank"
              style={{
                color: "inherit",
                textDecoration: "none",
              }}
            >
              HBTU ERP
            </a>
          </Button>
          <Button variant="contained" style={{ width: "100%" }}>
            <a
              href="https://hbtu.ac.in/"
              target="_blank"
              style={{
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Official Site
            </a>
          </Button>
        </List>
      </Drawer>
    </>
  );
};

export default Header;
