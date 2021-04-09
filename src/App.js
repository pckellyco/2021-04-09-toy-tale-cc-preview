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

  doFetch(data, method = 'GET', id = null) {
    const url = id !== null ? `${toysURL}/${id}` : toysURL;
    const body = JSON.stringify(data);
    return fetch(url, {
      body,
      headers,
      method,
    }).then((res) => res.json());
  }

  componentDidMount() {
    this.doFetch().then((toys) => this.setState({ toys }));
  }

  addToy = (toy) => {
    toy.likes = 1;
    this.doFetch(toy, 'POST').then((toy) =>
      this.setState({ toys: [toy, ...this.state.toys] })
    );
  };

  addLike = (toy) => {
    this.doFetch({ likes: toy.likes + 1 }, 'PATCH', toy.id).then((newToy) => {
      const toys = this.state.toys.map((t) => (t.id === toy.id ? newToy : t));
      this.setState({ toys });
    });
  };

  deleteToy = (toy) => {
    this.doFetch({}, 'DELETE', toy.id).then(() =>
      this.setState({ toys: this.state.toys.filter((t) => toy.id !== t.id) })
    );
  };

  handleClick = () => {
    this.setState({ display: !this.state.display });
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
