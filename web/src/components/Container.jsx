import React from 'react';
import { fetchAssetList } from '../utils';

export const Container = ({ children }) => {
  const files = fetchAssetList();

  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', minHeight: '100vh'}}>
      <div style={{display: 'inline-flex', flexDirection: 'column', maxWidth: '74rem', padding: '0 2rem', backgroundImage: 'url("' + files['marble.jpg'].default + '")', justifyContent  : 'center' }}>
        {children}
      </div>
    </div>
  );
};
