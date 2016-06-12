import React from 'react';
import Router from 'react-router';
import ReactDOM from 'react-dom';

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
        <Search />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);