import React from "react";
import "./ImageGalleryItem.css";

const ImageGalleryItem = ({ image, onClick }) => {
  if (!image || !image.webformatURL || !image.largeImageURL) {
    return null;
  }

  const handleClick = () => {
    onClick(image.largeImageURL);
  };

  return (
    <li className="ImageGalleryItem" onClick={handleClick}>
      <img src={image.webformatURL} alt="" className="ImageGalleryItem-image" />
    </li>
  );
};

export default ImageGalleryItem;
