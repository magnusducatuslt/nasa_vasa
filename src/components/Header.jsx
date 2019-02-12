import * as React from 'react';
import imageSimple from '../assets/images/1192646-planet-mars-wallpaper-2600-x-1600-4-k.png';
import image2x from '../assets/images/1192646-planet-mars-wallpaper-2600-x-1600-4-k@2x.png';
import image3x from '../assets/images/1192646-planet-mars-wallpaper-2600-x-1600-4-k@3x.png';

export const Header = () => (
  <div className={'header'}>
    <img
      src={imageSimple}
      srcSet={`${image2x}, ${image3x}`}
      className={'-planet-mars-wallpaper-2600x1600-4k'}
    />
  </div>
);
export const Test = () => {};
