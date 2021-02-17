import { styled } from '@material-ui/core';

import { COLORS } from '../../assets/const';

export const Header = styled('header')({
  backgroundColor: COLORS.headerBg,
  '& h1': { fontSize: '36px' },
});
