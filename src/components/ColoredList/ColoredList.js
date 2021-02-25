import React, { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { includes } from 'lodash';
import { getIsLoading, getList } from '../../store/coloredArray/selectors';

import { Box } from './style';
import { ColoredItem } from './ColoredItem';
import { getSelectedList } from '../../store/select/selectors';

export function ColoredListComponent() {
  const list = useSelector(getList);
  const isLoading = useSelector(getIsLoading);
  const selectedIdsList = useSelector(getSelectedList);

  const getSelected = useCallback(id => includes(selectedIdsList, id), [selectedIdsList]);

  return (
    <Box className="container">
      {!isLoading &&
        list.map(({ id, hex }) => (
          <ColoredItem key={id} id={id} hex={hex} selected={getSelected(id)} />
        ))}
    </Box>
  );
}

export const ColoredList = memo(ColoredListComponent);
