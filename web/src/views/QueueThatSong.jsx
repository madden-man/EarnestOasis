import React from 'react';
import { MuralAlbum } from '../components/MuralAlbum';
import { fetchAssetList, fetchMuralAssets } from '../utils';
import { SONG_PLACEMENTS } from '../utils/constants';

export const QueueThatSong = () => {
  const files = {
    ...fetchAssetList(),
    ...fetchMuralAssets()
  };

  return (
    <div style={{position: 'relative', marginTop: '30px'}}>
      <img src={files['mural-rotated.jpeg'].default } style={{width: '100%'}} alt="Mural Wall" />
      {SONG_PLACEMENTS.map((props) => <MuralAlbum {...props} name={files[props.name].default} />)}
    </div>
  )
}
