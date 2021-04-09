import React, { Component } from 'react';

class ToyCard extends Component {
  render() {
    const { toy, addLike, deleteToy } = this.props;

    return (
      <div className="card">
        <h2>{toy.name}</h2>
        <img src={toy.image} alt={toy.name} className="toy-avatar" />
        <p>{toy.likes} Likes </p>
        <button className="like-btn" onClick={() => addLike(toy)}>
          Like {'<3'}
        </button>
        <button className="del-btn" onClick={() => deleteToy(toy)}>
          Donate to GoodWill
        </button>
      </div>
    );
  }
}

export default ToyCard;
