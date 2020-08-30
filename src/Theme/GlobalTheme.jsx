// @flow
import React from 'react';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

export const GlobalTheme = ({ children, darkMode }) => {
  /**
   * Global App theme
   */
  const globalTheme = createMuiTheme({
    palette: {
      type: darkMode === true ? 'dark' : 'light',
      primary: {
        main: '#f44336',
      },
      secondary: {
        main: '#3ea6ff',
      },
      background: {
        default: darkMode ? '#232323' : '#FFF',
        paper: darkMode ? '#232323' : '#FFF',
        dark: darkMode ? '#181818' : '#F4F6F8',
      },
    },
    typography: {
      fontFamily: [
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  });

  return (
    <ThemeProvider theme={globalTheme}>{children}</ThemeProvider>
  );
};
