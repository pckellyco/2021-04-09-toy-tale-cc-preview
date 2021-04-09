import React from 'react';
import './App.css';

import Header from './components/Header';
import ToyForm from './components/ToyForm';
import ToyContainer from './components/ToyContainer';

const toysURL = 'http://localhost:3000/toys';
const headers = {
  'Content-type': 'application/json',
  Accepts: 'application/json',
};

class App extends React.Component {
  state = {
    display: false,
    toys: [],
  };

  componentDidMount() {
    fetch(toysURL)
      .then((res) => res.json())
      .then((json) => this.handleToys(json));
  }

  handleToys(toys) {
    this.setState({ toys });
  }

  addToy = (toy) => {
    toy.likes = 1;
    fetch(toysURL, {
      method: 'POST',
      headers,
      body: JSON.stringify(toy),
    })
      .then((res) => res.json())
      .then((toy) => this.setState({ toys: [toy, ...this.state.toys] }));
  };

  addLike = (toy) => {
    console.log('adding like for', toy);
    const toys = this.state.toys.map((t) => {
      const newToy = { ...t };
      if (newToy.id === toy.id) {
        newToy.likes += 1;
      }
      return newToy;
    });
    this.setState({ toys });
  };

  deleteToy = (toy) => {
    console.log('deleting', toy);
    const toys = this.state.toys.filter((t) => toy.id !== t.id);
    this.setState({ toys });
  };

  handleClick = () => {
    let newBoolean = !this.state.display;
    this.setState({
      display: newBoolean,
    });
  };

  render() {
    return (
      <>
        <Header />
        {this.state.display ? <ToyForm addToy={this.addToy} /> : null}
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer
          toys={this.state.toys}
          addLike={this.addLike}
          deleteToy={this.deleteToy}
        />
      </>
    );
  }
}

export default App;
