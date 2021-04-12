import React, { Component } from 'react';

class ToyCard extends Component {
  render() {

    return (
      <div className="card">
        <h2>{''}</h2>
        <img src={''} alt={''} className="toy-avatar" />
        <p>{''} Likes </p>
        <button className="like-btn">Like {'<3'}</button>
        <button className="del-btn"> Donate to GoodWill</button>
      </div>
    );
  }
}

export default ToyCard;
