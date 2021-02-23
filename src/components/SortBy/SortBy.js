import React from 'react';
import { FormControlLabel, Radio, RadioGroup, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { SPECTRUM_VALUES } from '../../utils/constants';

import { Box } from './style';
import { sortBySpectrum } from '../../store/coloredArray/actions';
import { getSortedParam } from '../../store/coloredArray/selectors';

export function SortBy() {
  const param = useSelector(getSortedParam);
  const dispatch = useDispatch();

  const handleChange = ({ target: { value } }) => dispatch(sortBySpectrum(value));

  return (
    <Box mb={3}>
      <Typography>You can sort items by color spectrum</Typography>
      <RadioGroup value={param} onChange={handleChange} color="primary">
        {Object.values(SPECTRUM_VALUES).map(item => (
          <FormControlLabel key={item} value={item} control={<Radio />} label={item} />
        ))}
      </RadioGroup>
    </Box>
  );
}
