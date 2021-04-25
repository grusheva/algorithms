import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { getIsLoading, getColoredList } from '../../store/coloredArray/selectors';

import { Box } from './style';
import { ColoredItem } from './ColoredItem/ColoredItem';
import { getSelectedIdsMap } from '../../store/select/selectors';

export function ColoredListComponent() {
  const list = useSelector(getColoredList);
  const isLoading = useSelector(getIsLoading);
  const selectedIdsMap = useSelector(getSelectedIdsMap);

  return (
    <Box className="container">
      {!isLoading &&
        list.map(hex => (
          <ColoredItem key={hex} hex={hex} selected={Boolean(selectedIdsMap[hex])} />
        ))}
    </Box>
  );
}

export const ColoredList = memo(ColoredListComponent);
