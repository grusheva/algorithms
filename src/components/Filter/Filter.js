import React, { useEffect, useRef, useState } from 'react';
import { TextField, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { isString } from 'lodash';

import { selectByFilter } from '../../store/select/actions';
import { getFilterValue } from '../../store/filter/selectors';
import { useDebounce } from '../../hooks/';

import { Box } from './style';

export function Filter() {
  const [searchValue, setSearchValue] = useState('');
  const filterRef = useRef(null);
  const dispatch = useDispatch();
  const value = useSelector(getFilterValue);

  const debouncedSearchTerm = useDebounce(searchValue);

  useEffect(() => {
    setSearchValue(value);
  }, [value]);

  useEffect(() => {
    if (isString(debouncedSearchTerm)) {
      dispatch(selectByFilter(searchValue));
    }
  }, [debouncedSearchTerm]);

  const handleChange = ({ ctrlKey, target: { value } }) => {
    if (ctrlKey) {
      filterRef.current.blur();
    } else {
      setSearchValue(value);
    }
  };

  return (
    <Box mb={3}>
      <Typography>Please, input hex value to search</Typography>
      <TextField
        label="HEX"
        value={searchValue}
        onChange={handleChange}
        inputProps={{ ref: filterRef }}
      />
    </Box>
  );
}
