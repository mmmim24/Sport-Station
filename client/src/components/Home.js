import React from 'react';
import HomeCarousel from './HomeCarousel';
import Services from './Services';
import Info from './Info';

export const Home = () => {
    return (
      <React.Fragment>
        <HomeCarousel/>
        <Services/>
        <Info/>
      </React.Fragment>
    )
  }