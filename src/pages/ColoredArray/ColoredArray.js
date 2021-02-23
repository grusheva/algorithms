import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';

import { generateNewArray, resetSortedParam } from '../../store/coloredArray/actions';
import { CororedList, Filter, PageHeader, PageHeaderNav, SortBy } from '../../components';
import { withLayout } from '../../hoc';
import { resetFilterValue } from '../../store/filter/actions';

function ColoredArray() {
  const dispatch = useDispatch();
  const handleGenerate = useCallback(() => {
    dispatch(generateNewArray());
    dispatch(resetSortedParam());
    dispatch(resetFilterValue());
  }, [dispatch]);

  useEffect(() => {
    handleGenerate();
  }, [handleGenerate]);

  return (
    <>
      <PageHeader title="Colored Array">
        <PageHeaderNav>
          <Button
            onClick={handleGenerate}
            color="primary"
            className="ml"
            variant="contained"
            size="small"
          >
            Generate
          </Button>
        </PageHeaderNav>
      </PageHeader>
      <SortBy />
      <Filter />
      <CororedList />
    </>
  );
}

export default withLayout(ColoredArray);
