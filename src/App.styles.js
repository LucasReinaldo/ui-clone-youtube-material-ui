import { makeStyles } from '@material-ui/core/styles';

export const appStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    height: '100vh',
    backgroundColor: theme.palette.background.dark,
  }
}));
