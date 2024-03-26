import React from 'react';
import Banner from '../components/Banner';

import CarrouselAreas  from '../components/Carrousel';
const Home = () => {
  return (
    <div>
        <Banner title_start={"Blocs dans"} title_end={"le Sud de France"}></Banner>
        <CarrouselAreas></CarrouselAreas>
    </div>
  );
};

export default Home;
