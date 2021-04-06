import React, { memo, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { toggleSelectItemId } from '../../store/select/actions';

import { Box } from './style';

function ColoredItemComponent({ hex, selected }) {
  const dispatch = useDispatch();

  const handleClick = useCallback(hex => () => dispatch(toggleSelectItemId(hex)), [dispatch]);

  const getClassName = useCallback(() => (selected ? 'item selected' : 'item'), [selected]);

  const getProps = useMemo(
    () => ({
      onClick: handleClick(hex),
      style: { backgroundColor: `#${hex}` },
    }),
    [handleClick, hex],
  );

  return <Box {...getProps} className={getClassName()} />;
}

ColoredItemComponent.propTypes = {
  hex: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
};

export const ColoredItem = memo(ColoredItemComponent);
