/* eslint-disable react/prop-types */
import React from 'react';
import gallery from './gallery.css';

const GalleryImage = ({ image, length }) => {
  // const id = image.img_order;
  const id = image.indexOf();
  const imgClass = `img${id}in${length}`;
  // const url = `url(${image.url})`;
  const url = `url(${image})`;
  return (
    <div className={gallery[imgClass]} style={{ backgroundImage: url }} name={id} id={id}> </div>
  );
};

export default GalleryImage;
