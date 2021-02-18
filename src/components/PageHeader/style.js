import { Grid as MuiGrid, styled, withStyles } from '@material-ui/core';

export const Grid = withStyles({
  root: {
    '&.content': { display: 'flex', alignContent: 'center' },
  },
})(MuiGrid);

export const Header = styled('header')({
  '& h1': { fontSize: '36px' },
});
