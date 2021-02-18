import React from 'react';
import PropTypes from 'prop-types';
import { Divider, Box, Typography } from '@material-ui/core';

import { Header, Grid } from './style';

export function PageHeader({ title, children }) {
  return (
    <Header>
      <Grid justify="space-between" alignContent="center" container>
        <Grid item>
          <Typography variant="h1" gutterBottom display="inline">
            {title}
          </Typography>
        </Grid>
        <Grid item className="content">
          {children}
        </Grid>
      </Grid>
      <Box my={3}>
        <Divider />
      </Box>
    </Header>
  );
}

PageHeader.propTypes = {
  backLink: PropTypes.string,
  backLinkText: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.shape({}), PropTypes.array]),
};
PageHeader.defaultProps = {
  backLink: '',
  backLinkText: undefined,
  title: '',
  children: null,
};
