import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';

import './header.css';

export const _Header = ({ location }) => {
  const [opacity, setOpacity] = useState(0);

  const handleScroll = () => {
    const height = window.innerWidth <= 1009 ? 256 : ((window.innerWidth * 256 / 1009));
    const startToShow = height - 160;
  
    setOpacity((window.scrollY - startToShow + 30) / 80);
  };

  useEffect(() => {
    if (location.pathname === '/') {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }
    
    return () => location.pathname === '/' && window.removeEventListener('scroll', handleScroll);
  }, [opacity, location]);

  return (
    <div className="header" style={{ opacity }}>
      <a className="header__logo" href="/">earnest oasis</a>
    </div>
  );
}

export const Header = withRouter(_Header);