import React from 'react';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import { Typography } from '@material-ui/core';

import { Box } from './style';

export function Sidebar({ children }) {
  return (
    <Box className="container" pl={2}>
      <Box className="title">
        <Box mr={2}>
          <DataUsageIcon />
        </Box>
        <Box mr={2}>
          <Typography variant="h6">Algorithms</Typography>
        </Box>
      </Box>
      <Box>{children}</Box>
    </Box>
  );
}
