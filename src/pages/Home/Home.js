import React from 'react';
import { Grid } from '@material-ui/core';

import { PageHeader } from '../../components';
import { withLayout } from '../../hoc';

function Home() {
  return (
    <>
      <PageHeader title="Welcome!" />
      <Grid container>
        <Grid item>This progect is training</Grid>
      </Grid>
    </>
  );
}

export default withLayout(Home);
