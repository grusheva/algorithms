import React, { useEffect, useState } from 'react';
import { FormControlLabel, Radio, RadioGroup, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { SPECTRUM_VALUES } from '../../utils/constants';

import { Box } from './style';
import { sortBySpectrum } from '../../store/coloredArray/actions';

export function SortBy() {
  const [currentValue, setCurrentValue] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentValue) {
      dispatch(sortBySpectrum(currentValue));
    }
  }, [currentValue, dispatch]);

  const handleChange = ({ target: { value } }) => setCurrentValue(value);

  return (
    <Box mb={3}>
      <Typography>You can sort items by color spectrum</Typography>
      <RadioGroup value={currentValue} onChange={handleChange} color="primary">
        {Object.values(SPECTRUM_VALUES).map(item => (
          <FormControlLabel key={item} value={item} control={<Radio />} label={item} />
        ))}
      </RadioGroup>
    </Box>
  );
}
