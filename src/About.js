import React, { Component } from 'react';

const About = props => (
  <div>
    <h1>About</h1>
    <br />
    <button onClick={() => { props.history.push('/'); }}>
      Go to Main page
    </button>
    <br />
    <button onClick={() => { props.history.push('/setting'); }}>
      Go to Setting page
    </button>
  </div>
);

export default About;