import { styled } from '@material-ui/core';
import { COLORS } from '../../../assets/const';

export const Box = styled('div')({
  height: '20px',
  width: '20px',
  border: `5px solid ${COLORS.sidebarBg}`,
  transition: 'all .2s ease-in-out',

  '&.selected': { borderColor: COLORS.red },
  '&:hover': { transform: 'scale(1.5)' },
});
