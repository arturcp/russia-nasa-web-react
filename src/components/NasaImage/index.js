import React, { Component } from 'react';

import api from '../../services/api';
import './style.css';

class NasaImage extends Component {
  state = {
    image: '',
  }

  componentDidMount() {
    this.loadImageOfTheday();
  }

  loadImageOfTheday = async () => {
    const response = await api.get('/days?date=2020-01-01');
    console.log(response);
    this.setState({ image: response.data.image });
  }

  renderImage = () => {
    if (this.state.image !== '') {
      return <img src={this.state.image} />
    } else {
      return <p>loading...</p>
    }
  }

  render() {
    return (
      <div className="image-of-the-day">
        <h1>Image of the day</h1>
        <p>lorem ipsum </p>
        {this.renderImage()}
      </div>
    )
  }
}

export default NasaImage;
