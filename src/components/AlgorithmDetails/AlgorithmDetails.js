import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

import { Box } from '../Sidebar/style';

export function AlgorithmDetails({ start, end, model }) {
  return (
    <Box>
      <Typography>{model.title}</Typography>
      <Typography>Time to calc: {end - start} msc</Typography>
    </Box>
  );
}

AlgorithmDetails.propTypes = {
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  model: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
};
