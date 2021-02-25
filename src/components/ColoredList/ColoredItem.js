import React, { memo, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { toggleSelectItemId } from '../../store/select/actions';

import { Box } from './style';

function ColoredItemComponent({ id, hex, selected }) {
  const dispatch = useDispatch();

  const handleClick = useCallback(id => () => dispatch(toggleSelectItemId(id)), []);

  const getClassName = useCallback(() => (selected ? 'item selected' : 'item'), [selected]);

  const getProps = useMemo(
    () => ({
      key: id,
      onClick: handleClick(id),
      style: { backgroundColor: hex },
    }),
    [id, hex],
  );

  return <Box {...getProps} className={getClassName()} />;
}

ColoredItemComponent.propTypes = {
  id: PropTypes.number.isRequired,
  hex: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
};

export const ColoredItem = memo(ColoredItemComponent);
