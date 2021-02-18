import React from 'react';
import { ConnectedRouter } from 'connected-react-router';

import { Router } from './routes/Routes';

function App({ history, context }) {
  return (
    <ConnectedRouter history={history} context={context}>
      <Router />
    </ConnectedRouter>
  );
}

export default App;
