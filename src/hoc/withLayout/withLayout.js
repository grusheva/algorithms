import React from 'react';
import Layout from '../../components/Layout/Layout';

export const withLayout = Component => props => (
  <Layout>
    <Component {...props} />
  </Layout>
);
