import React from 'react';
import HomeCarousel from './HomeCarousel';
import Services from './Services';
import Footer from './Footer';

export const Home = () => {
    return (
      <React.Fragment>
        <HomeCarousel/>
        <Services/>
        <Footer/>
      </React.Fragment>
    )
  }