import React, { Component } from 'react';

class ToyCard extends Component {
  render() {
    const toy = this.props
    return (
      <div className="card">
        <h2>{toy.toy}</h2>
        <img src={toy.image} alt={toy.image} className="toy-avatar" />
        <p>{toy.likes} Likes </p>
        <button className="like-btn">Like {'<3'}</button>
        <button className="del-btn"> Donate to GoodWill</button>
      </div>
    );
  }
}

export default ToyCard;
