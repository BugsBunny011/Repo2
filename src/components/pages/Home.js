import React from 'react';
import App from '../../App';
import HeroSection from '../HeroSection';
import Cards from '../Cards'
import Footer from '../Footer'
import ComingSoon from '../ComingSoon';


function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <ComingSoon />
      <Footer />
    </>
  );
}

export default Home;