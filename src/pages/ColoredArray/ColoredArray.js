import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';

import { generateArray, resetSortedParam } from '../../store/coloredArray/actions';
import { ColoredList, Filter, PageHeader, PageHeaderNav, SortBy } from '../../components';
import { withLayout } from '../../hoc';
import { resetFilterValue } from '../../store/filter/actions';
import { setSelectedHistoryBack, setSelectedHistoryNext } from '../../store/select/actions';

function ColoredArray() {
  const dispatch = useDispatch();
  const handleGenerate = useCallback(() => {
    dispatch(generateArray());
    dispatch(resetSortedParam());
    dispatch(resetFilterValue());
  }, [dispatch]);
  const filterRef = useRef(null);

  useEffect(() => {
    handleGenerate();
  }, [handleGenerate]);

  useEffect(() => {
    const keydownHandler = e => {
      if (e.keyCode === 90 && e.ctrlKey && !e.shiftKey) {
        filterRef.current.blur();
        dispatch(setSelectedHistoryBack());
      } else if (e.keyCode === 90 && e.ctrlKey && e.shiftKey) {
        filterRef.current.blur();
        dispatch(setSelectedHistoryNext());
      }
    };
    document.addEventListener('keyup', keydownHandler);

    return () => {
      document.removeEventListener('keyup', keydownHandler);
    };
  }, [dispatch]);

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
      <Filter filterRef={filterRef} />
      <ColoredList />
    </>
  );
}

export default withLayout(ColoredArray);
