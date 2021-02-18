import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Grid } from '@material-ui/core';

import { getListAllBreeds } from '../../store/breeds/actions';
import { getBreedsImages } from '../../store/breedsImages/actions';

import { PageHeader, PageHeaderNav } from '../../components';
import { withLayout } from '../../hoc';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListAllBreeds());
    dispatch(getBreedsImages());
  }, []);

  return (
    <form onSubmit={() => console.log('sub')}>
      <PageHeader title="Task 1">
        <PageHeaderNav withSubmit />
      </PageHeader>
      <Grid container>
        <Grid item></Grid>
      </Grid>
    </form>
  );
}

export default withLayout(Home);
