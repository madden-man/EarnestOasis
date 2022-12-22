import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import { HeaderItem } from './HeaderItem';

import './header.css';

export const _Header = ({ location }) => {
  const [opacity, setOpacity] = useState(location.pathName === '/' ? 0 : 1);

  const handleScroll = () => {
    const startToShow = 300;

    if (window.scrollY < 36)
      setOpacity(1);
    else
      setOpacity((window.scrollY - startToShow + 30) / 80);
  };

  useEffect(() => {
    if (location.pathname === '/') {
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
    } else {
      setOpacity(1);
    }
    
    return () => location.pathname === '/' && window.removeEventListener('scroll', handleScroll);
  }, [opacity, location]);

  if (opacity <= 0) {
    return null;
  }

  return (
    <div className="header" style={{ opacity }}>
      <Link className="header__logo" to="/">earnest oasis</Link>
      <div className="header__menu">
        <HeaderItem title="Renters" items={[{ text: 'Service Requests', url: '/service-requests'}, { text: 'Calendar', url: '/calendar'}]} />
        <HeaderItem title="Everyone" items={[{ text: 'Queue a Song!', url: '/music-party'}, { text: 'Request a Snack!', url: '/snack-shelf'}]} />
      </div>
    </div>
  );
}

export const Header = withRouter(_Header);