import React from 'react';
import Home from './pages/Home/Home';
import { StylesProvider } from '@material-ui/styles';

import './assets/webfonts/Montserrat/Montserrat.css';

function App() {
  return (
    <StylesProvider injectFirst>
      <Home />
    </StylesProvider>
  );
}

export default App;
