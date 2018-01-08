import React, { Component } from 'react';
import { render } from 'react-dom';
// import 'styled-components';

class Example extends Component {
  render() {
    return (
      <div className="Example">
        <h1>It works!</h1>
      </div>
    );
  }
};

var root = document.querySelector('.example');
render(<Example />, root);
