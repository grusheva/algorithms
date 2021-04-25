import React from 'react';
import { useSelector } from 'react-redux';

import { ColoredItem } from './ColoredItem/ColoredItem';
import { getColoredList } from '../../store/coloredArray/selectors';
import { getSelectedIdsMap } from '../../store/select/selectors';

import { Box } from './style';

export function ColoredListComponent() {
  const list = useSelector(getColoredList);
  const selectedIdsMap = useSelector(getSelectedIdsMap);

  return (
    <Box>
      {list.map(hex => (
        <ColoredItem key={hex} hex={hex} selected={Boolean(selectedIdsMap[hex])} />
      ))}
    </Box>
  );
}

export const ColoredList = ColoredListComponent;
