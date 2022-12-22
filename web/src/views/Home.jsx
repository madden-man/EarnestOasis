import React from 'react';
import { Container } from '../components/Container';

import { WelcomeBanner } from '../components/WelcomeBanner';
import { ContactForm } from '../components/ContactForm';
import { Header } from '../components/Header';
import { fetchAssetList } from '../utils';

import './home.css'

export const Home = () => {
  const files = fetchAssetList();

  return (
    <div className="home">
      <Header />
      <WelcomeBanner bgImage="house1-edited.jpeg" />
      <Container>
        <div className="profiles">
          <img src={files['me-with-house.jpg'].default} alt="me with house" className="profiles__me-mobile" />
          <img src={files['hillary-placeholder.jpg'].default} alt="hillary placeholder" className="profiles__other" />
          <img src={files['me-with-house.jpg'].default} alt="me with house" className="profiles__me" />
          <img src={files['andy-placeholder.jpg'].default} alt="andy placeholder" className="profiles__other" />
        </div>
        <div className="welcome-message">
          Welcome to the Earnest Oasis!
        </div>
        <div className="welcome-description">
          Hello and welcome to our little slice of heaven, the Earnest Oasis! We are so proud to call this pile of bricks and dry wall home,
          and we want you to enjoy your stay -- so please! Kick your feet up, grab something from the snack shelf, and know that you are
          safe as long as you are within these walls. And of course - let me know if you need anything below!
        </div>
        <ContactForm />
      </Container>
    </div>
  );
};