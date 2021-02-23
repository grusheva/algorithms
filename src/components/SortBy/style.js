import { Box as MuiBox, withStyles } from '@material-ui/core';

export const Box = withStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& .MuiFormGroup-root': {
      flexDirection: 'row',
      '& .MuiFormControlLabel-label': { textTransform: 'capitalize' },
    },
  },
})(MuiBox);
