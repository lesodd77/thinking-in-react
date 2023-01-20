// @ts-nocheck
import React from 'react';

import { BackToTopButton } from '../components/backToTopButton/BackToTopButton';

import { Hero } from './hero/Hero';

export const Home = () => {

  return (

    <>
      <main id='home' className='dark:!bg-none'>
        <Hero />
        <BackToTopButton />
      </main>
    </>
  );
};
