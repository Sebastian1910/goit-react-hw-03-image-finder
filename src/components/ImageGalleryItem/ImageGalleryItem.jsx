import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ImageGalleryItem.css";

class ImageGalleryItem extends Component {
  handleClick = () => {
    this.props.onClick(this.props.image.largeImageURL);
  };

  render() {
    const { image } = this.props;
    return (
      <li className="ImageGalleryItem" onClick={this.handleClick}>
        <img
          src={image.webformatURL}
          alt=""
          className="ImageGalleryItem-image"
        />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
