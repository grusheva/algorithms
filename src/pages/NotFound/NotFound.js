import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Grid } from '@material-ui/core';
import { Box } from '../../components/Sidebar/style';
import { ROUTES } from '../../routes/constants';

function NotFound() {
  return (
    <Box mt={10}>
      <Grid container justify="center">
        <Grid item sm={12}>
          <Typography component="h1" variant="h1" align="center" gutterBottom>
            404
          </Typography>
        </Grid>
        <Grid item sm={12}>
          <Typography component="h2" variant="h5" align="center" gutterBottom>
            Page not found.
          </Typography>
        </Grid>
        <Grid item>
          <Button component={Link} to={ROUTES.home} variant="contained" color="primary">
            Return to website
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default NotFound;
