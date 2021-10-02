import React from 'react';
import { Container } from '../components/Container';

import { WelcomeBanner } from '../components/WelcomeBanner';
import { ContactForm } from '../components/ContactForm';
import { fetchAssetList } from '../utils';

import './home.css'

export const Home = () => {
  const files = fetchAssetList();

  return (
    <div className="home">
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
        <ContactForm />
      </Container>
    </div>
  );
};