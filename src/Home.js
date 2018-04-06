import React, { Component } from 'react';

class Home extends React.Component {
  goto(path = '/') {
    this.props.history.push(path);
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <br />
        <button onClick={() => { this.goto('/about'); }}>
          Go to About page
        </button>
        <br />
        <button onClick={() => { this.goto('/setting'); }}>
          Go to Setting page
        </button>
      </div>
    );
  }
}

export default Home;
