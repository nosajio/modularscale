import React, { Component } from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

const Element = styled.div`
  background: midnightblue;
  width: 100px;
  height: 100px;
`;

class Example extends Component {
  render() {
    return (
      <div className="Example">
        <Element />
      </div>
    );
  }
};

const root = document.querySelector('.example');
render(<Example />, root);
