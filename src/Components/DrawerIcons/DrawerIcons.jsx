import React from 'react';

import {
  Toolbar,
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

import { drawerIconsStyles } from './DrawerIcons.styles';

const DrawerIcons = () => {
  const classes = drawerIconsStyles();

  return (
    <>
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
              <ListItemIcon classes={{ root: classes.centerIcon }}>
                {<MailIcon />}
              </ListItemIcon>
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon classes={{ root: classes.centerIcon }}>
                {<Whatshot />}
              </ListItemIcon>
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon classes={{ root: classes.centerIcon }}>
                {<Subscriptions />}
              </ListItemIcon>
            </ListItem>
            <Divider classes={{ root: classes.divider }} />

            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon classes={{ root: classes.centerIcon }}>
                {<LibraryAdd />}
              </ListItemIcon>
            </ListItem>

            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon classes={{ root: classes.centerIcon }}>
                {<History />}
              </ListItemIcon>
            </ListItem>
          </List>

          <Divider />

          <Box>
            <ListItem button>
              <ListItemIcon classes={{ root: classes.centerIcon }}>
                <AccountCircle button color="secondary" />
              </ListItemIcon>
            </ListItem>
          </Box>
          <Divider />

          <List component="nav" aria-labelledby="nested-list-subheader">
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon classes={{ root: classes.centerIcon }}>
                <MovieCreationRounded />
              </ListItemIcon>
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon classes={{ root: classes.centerIcon }}>
                <GamesRounded />
              </ListItemIcon>
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon classes={{ root: classes.centerIcon }}>
                <MusicNoteRounded />
              </ListItemIcon>
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon classes={{ root: classes.centerIcon }}>
                <SportsBaseballRounded />
              </ListItemIcon>
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon classes={{ root: classes.centerIcon }}>
                <NewReleasesRounded />
              </ListItemIcon>
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon classes={{ root: classes.centerIcon }}>
                <LiveHelpRounded />
              </ListItemIcon>
            </ListItem>
          </List>
        </div>
      </DrawerContainer>
    </>
  );
};

export default DrawerIcons;
