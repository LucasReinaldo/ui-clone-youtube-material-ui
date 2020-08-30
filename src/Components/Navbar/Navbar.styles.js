import { makeStyles } from '@material-ui/core/styles';

export const navbarStyles = makeStyles((theme) => ({
  appBar: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
  },
  grow: {
    flexGrow: 1,
  },
  icons: {
    paddingRight: theme.spacing(2),
  },
  menuIcon: {
    marginRight: theme.spacing(2),
  },
  logo: {
    height: 25,
  },
}));
