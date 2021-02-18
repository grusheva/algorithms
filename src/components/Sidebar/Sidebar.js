import React from 'react';
import { Link } from 'react-router-dom';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import { Button, Typography } from '@material-ui/core';

import { Box } from './style';
import { ROUTES } from '../../routes/constants';

export function Sidebar() {
  return (
    <Box className="container" px={2}>
      <Box className="title" component={Link} to={ROUTES.home}>
        <Box mr={2}>
          <DataUsageIcon />
        </Box>
        <Box mr={2}>
          <Typography variant="h6">Algorithms</Typography>
        </Box>
      </Box>
      <Box>
        <Button component={Link} to={ROUTES.coloredArray} variant="text" fullWidth>
          <Box mr={1}>
            <ColorLensIcon />
          </Box>
          Colored Array
        </Button>
      </Box>
    </Box>
  );
}
