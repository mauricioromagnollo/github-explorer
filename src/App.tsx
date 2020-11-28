import React from 'react';
import { HashRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import { Routes } from './routes';

export const App: React.FC = () => (
  <>
    <GlobalStyle />
    <HashRouter>
      <Routes />
    </HashRouter>
  </>
);
