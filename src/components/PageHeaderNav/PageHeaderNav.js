import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

export function PageHeaderNav({ withSubmit, children }) {
  return (
    <nav>
      {children}
      {withSubmit && (
        <Button type="submit" color="primary" className="ml" variant="contained" size="small">
          Generate
        </Button>
      )}
    </nav>
  );
}

PageHeaderNav.propTypes = {
  cancelLink: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.shape({}), PropTypes.array]),
};
PageHeaderNav.defaultProps = {
  cancelLink: '',
  children: null,
};
