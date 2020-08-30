import React from 'react';

import { AppBar, Toolbar, IconButton, Button, useTheme } from '@material-ui/core';

import {
  Menu as MenuIcon,
  AccountCircle,
  Apps,
  MoreVert,
  VideoCall,
} from '@material-ui/icons';

import { navbarStyles } from './Navbar.styles';

const Navbar = () => {
  const classes = navbarStyles();

  const theme = useTheme();
  
  return (
    <>
      <div className={classes.root}>
        <AppBar color="inherit" className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuIcon}
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <img src={theme.palette.type === 'dark' ? "/assets/branco.png" : "/assets/preto.png"} alt="logo" className={classes.logo} />
            <div className={classes.grow} />
            <IconButton className={classes.menuButton}>
              <VideoCall />
            </IconButton>
            <IconButton className={classes.menuButton}>
              <Apps />
            </IconButton>
            <IconButton className={classes.menuButton}>
              <MoreVert />
            </IconButton>
            <Button
              startIcon={<AccountCircle />}
              variant="outlined"
              color="secondary"
            >
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default Navbar;
