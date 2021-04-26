import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { toggleSelectItemId } from '../../../store/select/actions';

import { Box } from './style';

function ColoredItemComponent({ hex, selected }) {
  const dispatch = useDispatch();

  const handleClick = () => dispatch(toggleSelectItemId(hex));

  return (
    <Box
      style={{ backgroundColor: `#${hex}` }}
      onClick={handleClick}
      className={selected ? 'selected' : ''}
    />
  );
}

ColoredItemComponent.propTypes = {
  hex: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
};

export const ColoredItem = memo(ColoredItemComponent);
