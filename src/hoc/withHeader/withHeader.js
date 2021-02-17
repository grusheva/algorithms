import React from 'react';
import { HeaderComponent } from '../../components/';

export const withHeader = Component => props => (
  <>
    <HeaderComponent />
    <Component {...props} />
  </>
);
