import React, { Component } from 'react';
import './style.css';
import NasaImage from "../NasaImage";

class ImageGallery extends Component {
  state = {
    nasaImages: [<NasaImage />, <NasaImage />],
  }

  images = () => {
    return this.state.nasaImages.map((item, index) => (
      <div key={index} className="left">{item}</div>
    ));
  }

  render() {
    return (
      <div className="gallery">
        {this.images()}
      </div>
    )
  }
}

export default ImageGallery;
