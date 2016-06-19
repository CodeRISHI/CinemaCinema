// import React from 'react';
// import Router from 'react-router';
// import ReactDOM from 'react-dom';
// import Search from '../components/Search.js';
// var Search = require('Search');

class App extends React.Component {
  constructor(props) {
    console.log('hi there')
    super(props);

    this.state = {

    };

    // ADD BINDING HERE
  }

  render() {
    console.log('hi there')
    return (
      <div>
        <h1>App</h1>
        <Search />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
        // <Search />