import React from 'react';

export const MuralAlbum = ({ name, top = 0, left = 0, width = 0 }) =>
  <img src={name} style={{position: 'absolute', top: `${top}%`, left: `${left}%`, width: `${width}%` }} alt={`Mural Album ${name}`} />;