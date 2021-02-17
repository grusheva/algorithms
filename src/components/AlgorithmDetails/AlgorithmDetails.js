import React from 'react';
import { Typography } from '@material-ui/core';
import { Box } from '../AlgorithmsList/style';

export function AlgorithmDetails({ start, end, model }) {
  return (
    <Box>
      <Typography>{model.title}</Typography>
      <Typography>Time to calc: {end - start} msc</Typography>
    </Box>
  );
}
