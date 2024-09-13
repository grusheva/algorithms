import React from 'react';
import Layout from '../../components/Layout/Layout';

/* eslint-disable react/display-name */
export const withLayout = Component => props => (
  <Layout>
    <Component {...props} />
  </Layout>
);
