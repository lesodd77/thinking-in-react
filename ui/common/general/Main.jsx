// @ts-nocheck
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { RoutePaths } from './RoutePaths';
import { Home } from '../../pages/index';
import { NotFound } from '../../components/notFound/NotFound';
import { Product } from '../../pages/products/Product';

export const Main = () => {
  return (
  <>
  <Routes>
   <Route path={RoutePaths.HOME} element={<Home />}/>
      <Route
        element={
        <Product />
        }
        path={RoutePaths.PRODUCT}
      />
      <Route path="*" element={<NotFound />} />
      </Routes>
  </>
  );
};
