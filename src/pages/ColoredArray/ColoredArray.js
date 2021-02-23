import React  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';

import { generateNewArray } from '../../store/coloredArray/actions';
import { getList } from '../../store/coloredArray/selectors';
import { PageHeader, PageHeaderNav } from '../../components';
import { withLayout } from '../../hoc';

function ColoredArray() {
  const dispatch = useDispatch();
  const list = useSelector(getList);

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(generateNewArray());
  };

  return (
    <form onSubmit={handleSubmit}>
      <PageHeader title="Colored Array">
        <PageHeaderNav withSubmit />
      </PageHeader>
      <Grid container>
        <Grid item>
          {list.map(item => (
            <span>{item.color}</span>
          ))}
        </Grid>
      </Grid>
    </form>
  );
}

export default withLayout(ColoredArray);
