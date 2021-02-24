import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { includes } from 'lodash';

import { getIsLoading, getList } from '../../store/coloredArray/selectors';
import { getSelectedList } from '../../store/select/selectors';
import { toggleSelectItemId } from '../../store/select/actions';
import { coloredArrayModel } from '../../models';

import { Box } from './style';

export function CororedList() {
  const dispatch = useDispatch();

  const list = useSelector(getList);
  const isLoading = useSelector(getIsLoading);
  const selectedIdsList = useSelector(getSelectedList);

  const handleClick = useCallback(id => () => dispatch(toggleSelectItemId(id)), []);

  const getClassName = useCallback(
    id => {
      if (!selectedIdsList.length) {
        return 'item';
      } else if (includes(selectedIdsList, id)) {
        return 'item selected';
      }
      return 'item';
    },
    [selectedIdsList],
  );

  const renderItem = item => {
    const { rgb, id } = coloredArrayModel.getItemProps(item);

    return (
      <Box
        // className={getClassName(id)}
        className="item"
        key={id}
        onClick={handleClick(id)}
        // style={{ backgroundColor: rgb }}
      />
    );
  };

  return <Box className="container">{!isLoading && list.map(item => renderItem(item))}</Box>;
}
