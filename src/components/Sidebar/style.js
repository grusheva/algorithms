import { Box as MuiBox, withStyles } from '@material-ui/core';
import { COLORS, SIZES } from '../../assets/const';

export const Box = withStyles({
  root: {
    '&.title': {
      display: 'flex',
      alignItems: 'center',
      padding: '8px 0',
      textDecoration: 'none',
      color: 'inherit',
      borderBottom: `1px solid ${COLORS.greyBorder}`,
    },
    '&.container': {
      position: 'fixed',
      height: '100vh',
      backgroundColor: COLORS.sidebarBg,
      width: SIZES.sidebarWidth,
      flexShrink: 0,
    },
  },
})(MuiBox);
