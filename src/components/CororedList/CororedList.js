import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { includes } from 'lodash';

import { getList } from '../../store/coloredArray/selectors';
import { getSelectedList } from '../../store/select/selectors';
import { toggleSelectItemId } from '../../store/select/actions';

import { Box } from './style';

export function CororedList() {
  const dispatch = useDispatch();

  const list = useSelector(getList);
  const selectedIdsList = useSelector(getSelectedList);

  const handleClick = id => () => dispatch(toggleSelectItemId(id));

  return (
    <Box className="container">
      {list.map(({ id, rgb }) => (
        <Box
          className={`item ${includes(selectedIdsList, id) ? 'selected' : ''}`}
          key={id}
          onClick={handleClick(id)}
          style={{ backgroundColor: `rgb(${rgb.r},${rgb.g}, ${rgb.b})` }}
        />
      ))}
    </Box>
  );
}
