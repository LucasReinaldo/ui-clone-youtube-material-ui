import { makeStyles } from '@material-ui/core';

export const drawerStyles = makeStyles({
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 220,
    borderRight: 'none',
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
});
