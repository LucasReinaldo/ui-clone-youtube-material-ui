import React from 'react';

import { Box, CssBaseline, Hidden, useTheme } from '@material-ui/core';

import Navbar from './Components/Navbar/Navbar';
import Drawer from './Components/Drawer/Drawer';
import DrawerIcons from './Components/DrawerIcons/DrawerIcons';
import VideoContent from './Components/VideoContent/VideoContent';

import { GlobalTheme } from './Theme';
import { appStyles } from './App.styles';

const App = () => {
  const darkMode = true;

  const classes = appStyles();
  const theme = useTheme();

  return (
    <>
      <CssBaseline />
      <GlobalTheme darkMode={darkMode}>
        <Box
          display="flex"
          bgcolor={
            theme.palette.type === 'dark'
              ? 'background.default'
              : 'background.dark'
          }
          classes={{ root: classes.root }}
        >
          <Navbar classes={{ root: classes.root }} />
          <Hidden mdDown>
            <Drawer />
          </Hidden>
          <Hidden lgUp>
            <DrawerIcons />
          </Hidden>
          <VideoContent />
        </Box>
      </GlobalTheme>
    </>
  );
};

export default App;
