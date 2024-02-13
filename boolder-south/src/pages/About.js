import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import CarrouselAreas  from '../components/Carrousel';
import {  Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div>
      <Banner title_start={"About"} title_end={"SouthCrag"}></Banner>
      <Container maxWidth="lg" disableGutters>
      
        <Typography  className="about-title" component="div">
            Why this project?
        </Typography>
        <Typography  className="about-content" component="div">
          SouthCrag is a non-profit project.
          The goal is to help people to find boulders in crags of the South of France near Montpellier.

          <div>
          I noticed that finding information about climbing sectors here was really challenging.
          There are few guidebooks, and existing ones are old and had many omissions. Additionally, there was no website or database available.
          Therefore, I decided to create my own database and subsequently follow in the footsteps of Boolder (see later) by venturing into the development of an interactive map.</div>
        </Typography>
        <Typography className="about-title" component="div">
          A brief overview of myself.
        </Typography>
        <Typography  className="about-content" component="div">

        <div>I'm Nicolas, a computer scientist with a specialization in AI. Aside from my tech pursuits, I'm an avid climber who initiated my climbing journey in the Forest of Fontainebleau.</div>
        <div>Currently residing in Montpellier, in the south of France, I've encountered the challenge of sourcing comprehensive information about bouldering in my local area.</div>
        </Typography>
        <Typography  className="about-title" component="div">
            Contact
        </Typography>
        <Typography  className="about-content" component="div">
            For any questions, you can contact us at 
            <Link to={"mailto:cotekeblo.contact@gmail.com"}> cotekeblo.contact@gmail.com</Link>
        </Typography>
        <Typography  className="about-title" component="div">
            Boolder
        </Typography>
        <Typography  className="about-content" component="div">  
          "Boulder" is a great website made by climbers from Fontainebleau, designed to assist locals in discovering bouldering spots through a geolocation map.
          see there job here

          <div>
            <Link to={"https://www.boolder.com/"}>View their work here.</Link>
          </div>
        </Typography>
      </Container>
    </div>
  );
};

export default Home;
