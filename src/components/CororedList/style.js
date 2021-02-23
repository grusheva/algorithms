import { Box as MuiBox, withStyles } from '@material-ui/core';
import { COLORS } from '../../assets/const';

export const Box = withStyles({
  root: {
    '&.container': {
      display: 'flex',
      flexWrap: 'wrap',
    },
    '&.item': {
      height: '20px',
      width: '20px',
      border: `5px solid ${COLORS.sidebarBg}`,
      transition: 'all .2s ease-in-out',

      '&.selected': { borderColor: COLORS.red },
      '&:hover': { transform: 'scale(1.5)' },
    },
  },
})(MuiBox);
