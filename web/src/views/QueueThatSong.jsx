import React from 'react';
import { fetchAssetList } from '../utils';

export const QueueThatSong = () => {
  const files = fetchAssetList();

  return (
    <div>
      <img src={files['mural-rotated.jpeg'].default } style={{width: '100%'}} alt="Mural Wall" />
    </div>
  )
}
