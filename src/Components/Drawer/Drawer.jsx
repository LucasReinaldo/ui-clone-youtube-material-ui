import React from 'react';

import {
  Toolbar,
  Typography,
  Button,
  Drawer as DrawerContainer,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemIcon,
  Box,
  ListSubheader,
  Hidden,
} from '@material-ui/core';

import {
  AccountCircle,
  Mail as MailIcon,
  Subscriptions,
  LibraryAdd,
  Whatshot,
  History,
  GamesRounded,
  MovieCreationRounded,
  MusicNoteRounded,
  NewReleasesRounded,
  LiveHelpRounded,
  SportsBaseballRounded,
} from '@material-ui/icons';

import { drawerStyles } from './Drawer.styles';

const Drawer = () => {
  const classes = drawerStyles();

  return (
    <>
      <Hidden mdDown>
        <DrawerContainer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
            <List>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>{<MailIcon />}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText,
                  }}
                  primary={'Inbox'}
                />
              </ListItem>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>{<Whatshot />}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText,
                  }}
                  primary={'Trending'}
                />
              </ListItem>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>{<Subscriptions />}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText,
                  }}
                  primary={'Subscriptions'}
                />
              </ListItem>
              <Divider classes={{ root: classes.divider }} />

              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>{<LibraryAdd />}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText,
                  }}
                  primary={'Library'}
                />
              </ListItem>

              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>{<History />}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText,
                  }}
                  primary={'History'}
                />
              </ListItem>
            </List>

            <Divider />

            <Box p={3}>
              <Typography variant="body2">
                Login now to enjoy the best video content.
              </Typography>
              <Box
                mt={2}
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Button
                  size="large"
                  variant="outlined"
                  color="secondary"
                  startIcon={<AccountCircle />}
                >
                  Login now
                </Button>
              </Box>
            </Box>
            <Divider />

            <List
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader
                  component="div"
                  id="nested-list-subheader"
                  className={classes.subheader}
                >
                  BEST ON YOUTUBE
                </ListSubheader>
              }
            >
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  <MovieCreationRounded />
                </ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText,
                  }}
                  primary={'Films'}
                />
              </ListItem>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  <GamesRounded />
                </ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText,
                  }}
                  primary={'Gaming'}
                />
              </ListItem>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  <MusicNoteRounded />
                </ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText,
                  }}
                  primary={'Music'}
                />
              </ListItem>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  <SportsBaseballRounded />
                </ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText,
                  }}
                  primary={'Sports'}
                />
              </ListItem>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  <NewReleasesRounded />
                </ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText,
                  }}
                  primary={'News'}
                />
              </ListItem>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  <LiveHelpRounded />
                </ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText,
                  }}
                  primary={'Live now'}
                />
              </ListItem>
            </List>
          </div>
        </DrawerContainer>
      </Hidden>
    </>
  );
};

export default Drawer;
