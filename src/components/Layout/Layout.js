import React from 'react';
import { CssBaseline, withWidth } from '@material-ui/core';
import { isWidthUp } from '@material-ui/core/withWidth';
import PropTypes from 'prop-types';

import { Sidebar } from '../Sidebar/Sidebar';

import { GlobalStyle, Root, AppContent, MainContent } from './style';

export function Layout({ children, width }) {
  return (
    <Root>
      <CssBaseline />
      <GlobalStyle />
      <Sidebar />
      <AppContent>
        <MainContent p={isWidthUp('lg', width) ? 10 : 5}>{children}</MainContent>
      </AppContent>
    </Root>
  );
}

Layout.propTypes = {
  width: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default withWidth()(Layout);
