// @ts-nocheck
/* eslint-disable import/no-unresolved */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Main } from './common/general/Main';
import { Header } from './common/header/Header';
import { Footer } from './common/footer/Footer';

export const App = () => {
  return (
  <Router>
      <Header />
        <div className="flex flex-col grow">
          <Main />
        </div>
      <Footer />
  </Router>
  );
};
