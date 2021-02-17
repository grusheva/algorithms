import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Grid } from '@material-ui/core';

import { getListAllBreeds } from '../../store/breeds/actions';
import { getBreedsImages } from '../../store/breedsImages/actions';
import { getBreedsImages as getBreedsImagesSelector } from '../../store/breedsImages/selectors';

import { AlgorithmDetails, AlgorithmsList } from '../../components';
import { withHeader, withLayout } from '../../hoc';
import { bubbleSorting } from '../../models';

function Home() {
  const [details, setDetails] = useState([]);

  const dispatch = useDispatch();
  const allImagesList = useSelector(getBreedsImagesSelector).hound;

  useEffect(() => {
    dispatch(getListAllBreeds());
    dispatch(getBreedsImages());
  }, []);

  const handleBubbleSorting = () => bubbleSorting.sort(allImagesList);

  const handleGetLog = func => () => {
    const start = new Date().getTime();
    func();
    const end = new Date().getTime();

    setDetails(prev => [...prev, { start, end, model: bubbleSorting }]);
  };

  return (
    <Grid container style={{ height: '100%' }}>
      <Grid item>
        <AlgorithmsList>
          <Button onClick={handleGetLog(handleBubbleSorting)}>Bubble sorting</Button>
        </AlgorithmsList>
      </Grid>
      <Grid item>
        {details.map(({ start, end, model }) => (
          <AlgorithmDetails start={start} end={end} model={model} />
        ))}
      </Grid>
    </Grid>
  );
}

export default withLayout(withHeader(Home));
