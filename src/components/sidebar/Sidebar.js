import React, { useState, useEffect, useRef } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Paper,
  AppBar,
  Toolbar,
} from "@material-ui/core";
import { HomeOutlined, LineStyleOutlined } from "@material-ui/icons";
import DetailsOutlinedIcon from "@material-ui/icons/DetailsOutlined";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MenuIcon from "@material-ui/icons/Menu";
import { useNavigate, useLocation } from "react-router-dom";
import CancelIcon from "@material-ui/icons/Cancel";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import useStyles from "./style";
function useWindowSize() {
  const [Size, setSize] = useState([window.innerWidth]);
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth]);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return Size;
}
const Sidebar = () => {
  const [width] = useWindowSize();
  console.log(width, "screenWidth");
  const menuRef = useRef();
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const [Open, setOpen] = useState(false);
  const [DrawerState, setDrawerState] = useState("permanent");
  const handleClick = (path) => {
    setOpen(false);
    navigate(`${path}`);
  };
  useEffect(() => {
    if (width < 960) {
      setDrawerState("temporary");
      console.log(DrawerState, "drawer");
    } else if (width > 960) {
      setDrawerState("permanent");
      console.log(menuRef.current);
    }
  }, [width, DrawerState]);
  useEffect(() => {
    let handler = (event) => {
      if (event.path !== menuRef.current) {
        setOpen(false);
      }
    };
    document.body.addEventListener("mousedown", (e) => {
      if (Open) {
        handler(e);
        console.log(e);
      }
    });
  }, [Open]);
  const menuItems = [
    {
      text: "Home",
      icon: <HomeOutlined color="textSecondary" />,
      path: "/",
    },
    {
      text: "Cryptocurrencies",
      icon: <DonutLargeIcon color="textSecondary" />,
      path: "/crypto",
    },
    {
      text: "CryptoNews",
      icon: <LineStyleOutlined color="textSecondary" />,
      path: "/news",
    },
  ];
  return (
    <>
      <AppBar className={classes.appbar}>
        <Toolbar className={classes.Toolbar}>
          <div className={classes.brand}>
            <img
              src="https://i.ibb.co/Z11pcGG/cryptocurrency.png"
              alt="cryptoverse"
              className={classes.img}
            />
            <Typography variant="h5">Cryptoverse</Typography>
          </div>
          {Open ? (
            "hello"
          ) : (
            <MenuIcon className={classes.icon} onClick={() => setOpen(true)} />
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        variant={DrawerState}
        anchor="left"
        className={classes.drawer}
        elevation={0}
        open={Open}
        classes={{ paper: classes.drawerPaper }}
        ref={menuRef}
      >
        <Paper className={classes.paper}>
          <img
            src="https://i.ibb.co/Z11pcGG/cryptocurrency.png"
            alt="cryptoverse"
            className={classes.img}
          />
          <Typography variant="h5">Cryptoverse</Typography>
        </Paper>
        <List className={classes.list}>
          {menuItems.map((item, index) => (
            <ListItem
              key={index}
              button
              onClick={() => handleClick(item.path)}
              className={location.pathname === item.path ? classes.item : null}
            >
              <ListItemIcon className={classes.icon}>{item.icon}</ListItemIcon>
              <ListItemText>{item.text}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
