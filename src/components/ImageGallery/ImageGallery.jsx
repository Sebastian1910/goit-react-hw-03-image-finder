import React from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import "./ImageGallery.css";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className="ImageGallery">
      {images.map((image) => {
        if (image.webformatURL && image.largeImageURL) {
          return (
            <ImageGalleryItem
              key={image.id}
              image={image}
              onClick={onImageClick}
            />
          );
        }
        return null;
      })}
    </ul>
  );
};

export default ImageGallery;
