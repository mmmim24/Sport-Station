import React from 'react';
import HomeCarousel from './HomeCarousel';
import Services from './Services';

export const Home = () => {
    return (
      <React.Fragment>
        <HomeCarousel/>
        <Services/>
      </React.Fragment>
    )
  }