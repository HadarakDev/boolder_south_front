import React from 'react';
import Banner from '../components/Banner';

import CarrouselAreas  from '../components/Carrousel';
const Home = () => {
  return (
    <div>
        <Banner title_start={"Bouldering in"} title_end={"South of France"}></Banner>
        <CarrouselAreas></CarrouselAreas>
    </div>
  );
};

export default Home;
