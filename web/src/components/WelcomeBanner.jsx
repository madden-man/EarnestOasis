import React, { useEffect, useState } from 'react';
import { fetchAssetList } from '../utils';

import './welcomeBanner.css'

export const WelcomeBanner = ({ bgImage }) => {
  const files = fetchAssetList();
  const image = files[bgImage];
  const initialHeight = window.innerWidth <= 1009 ? 256 : ((window.innerWidth * 256 / 1009));

  const [opacity, setOpacity] = useState(1);

  const handleScroll = () => {
    const height = window.innerWidth <= 1009 ? 256 : ((window.innerWidth * 256 / 1009));
    setOpacity((height - window.scrollY) / height);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [opacity]);

  return (
    <div className="welcome-banner" style={{ opacity, maxHeight: initialHeight, marginTop: '2.25rem' }}>
      <img src={image.default} alt={bgImage} style={{width: window.innerWidth, height: initialHeight}} />
    </div>
  );
};
