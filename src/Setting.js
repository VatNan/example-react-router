import React, { Component } from 'react';

class Setting extends React.Component {
  render() {
    return (
      <div>
        <h1>Setting</h1>
        <br />
        <button onClick={() => { this.props.history.push('/'); }}>
          Go to Main page
        </button>
        <br />
        <button onClick={() => { this.props.history.push('/about'); }}>
          Go to About page
        </button>
      </div>
    );
  }
}

export default Setting;