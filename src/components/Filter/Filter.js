import React from 'react';
import PropTypes from 'prop-types';
import { TextField, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { selectByFilter } from '../../store/select/actions';
import { getFilterValue } from '../../store/filter/selectors';

import { Box } from './style';

export function Filter({ filterRef }) {
  const dispatch = useDispatch();
  const value = useSelector(getFilterValue);

  const handleChange = ({ target: { value } }) => dispatch(selectByFilter(value));

  return (
    <Box mb={3}>
      <Typography>Please, input hex value to search</Typography>
      <TextField
        label="HEX"
        value={value}
        onChange={handleChange}
        inputProps={{ ref: filterRef }}
      />
    </Box>
  );
}

Filter.propTypes = {
  filterRef: PropTypes.shape({}).isRequired,
};
