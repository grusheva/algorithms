import { Box as MuiBox, withStyles } from '@material-ui/core';
import { COLORS } from '../../assets/const';

export const Box = withStyles({
  root: {
    '&.title': { display: 'flex', alignItems: 'center', padding: '8px 0' },
    '&.container': {
      position: 'relative',
      height: '100%',
      backgroundColor: COLORS.sidebarBg,
      width: '260px',
      flexShrink: 0,
    },
  },
})(MuiBox);
