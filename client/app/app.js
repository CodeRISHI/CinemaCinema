import React from 'react';
import Router from 'react-router';
import ReactDOM from 'react-dom';
import Search from '../components/Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };

    // ADD BINDING HERE
  }

  render() {
    return (
      <div>
        <h1>{`Search For Movies, Actors, etc.`}</h1>
        <Search />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));