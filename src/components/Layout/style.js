import { Box as MuiBox, styled, withStyles } from '@material-ui/core';
import { COLORS } from '../../assets/const';

export const GlobalStyle = withStyles({
  // @global is handled by jss-plugin-global.
  '@global': {
    'html, body, #root': {
      height: '100%',
    },
    body: {
      background: COLORS.background,
      fontFamily: 'Montserrat',
    },
  },
})(() => null);

export const Root = styled(MuiBox)({
  display: 'flex',
  minHeight: '100vh',
});

export const AppContent = styled(MuiBox)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
});

export const MainContent = styled(MuiBox)({
  flex: 1,
  background: COLORS.background,

  '@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)': {
    flex: 'none',
  },
});