import React from 'react';
import PropTypes from 'prop-types';

export function PageHeaderNav({ children }) {
  return <nav>{children}</nav>;
}

PageHeaderNav.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.shape({}), PropTypes.array])
    .isRequired,
};
