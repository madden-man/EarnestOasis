import React from 'react';

export const Container = ({ children }) => {
  const background = {
    background: 'linear-gradient(to bottom, #3a7bd5, #00d2ff)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  };

  const border = {
    border: '2px solid darkblue',
    borderRadius: '0.25rem',
  };
  

  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', minHeight: '100vh'}}>
      <div style={{display: 'inline-flex', flexDirection: 'column', maxWidth: '74rem', padding: '0 2rem', ...background, ...border, justifyContent  : 'center' }}>
        {children}
      </div>
    </div>
  );
};

