import React from 'react';
import ToyCard from './ToyCard'

// functional component, always pass props
// to just pass one prop key {props.toys} or {toys}

const ToyContainer = (props) => {
  const toyArray = props.toys;

  console.log(toyArray)
  return (
    <div id="toy-collection">
      { toyArray.map((toy) =>
        <ToyCard toy={toy.toy} key={toy.id } image={toy.image} likes={toy.likes}/>)
      }
    </div>
  );
};

export default ToyContainer;
