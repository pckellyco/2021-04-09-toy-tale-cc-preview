import React from 'react';
import './App.css';

import Header from './components/Header';
import ToyForm from './components/ToyForm';
import ToyContainer from './components/ToyContainer';

const toysUrl = 'http://localhost:3000/toys'

class App extends React.Component {
  state = {
    display: false,
    toys: []
  };

  componentDidMount() {
    fetch(toysUrl)
    .then(response => response.json())
    .then(toyData => this.handleToys(toyData))
  }

  handleToys(toys) {
    this.setState( {toys: toys} )
  }

  handleClick = () => {
    const options = {
      method: "POST",
      headers: {
        Content: 'application.json',
        Accepts: 'application.json'
      }
    }
    fetch(toysUrl, options)
  }

  render() {
    return (
      <>
        <Header />
        { this.state.display 
            ?
            <ToyForm />
            :
            null
        }
        <div className="buttonContainer">
          <button onSubmit={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={ this.state.toys } /> 
        {/* pulling an array from state, starts out as empty array */}
      </>
    );
  }
}

export default App;
