import { makeStyles } from '@material-ui/core';

export const drawerIconsStyles = makeStyles((theme) => ({
  drawer: {
    width: 80,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerPaper: {
    width: 70,
    display: 'flex',
    flexDirection: 'column',
    borderRight: 'none',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 14,
  },
  listItem: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  divider: {
    marginTop: 8,
    marginBottom: 8,
  },
  subheader: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  centerIcon: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  }
}));
