import React, { Component } from 'react';
import { render } from 'react-dom';
import styled, { injectGlobal } from 'styled-components';
import { msopts, ms, mspx } from '../../js/ms';

const baseSize = 18; // pixels

msopts({
  scale: 1.618, // The golden section
  px: baseSize,
});

window.ms = ms;

injectGlobal`
  font: ${baseSize}px "Georgia", serif; 
  background: snow;
  *, *::after, *::before { box-sizing: border-box; }
`

const Container = styled.div`
  margin: ${ms(3)}rem 0 0 ${ms(3)}rem;
`

const Heading = styled.h1`
  max-width: ${mspx(8)}px;
  color: darkslategray;
  font-weight: normal;
  margin: ${ms(2)}rem 0 0 0;
`

const Heading1 = Heading.extend`
  font-size: ${ms(1)}rem;
`;

const Heading2 = Heading.extend`
  font-size: ${mspx(3)}px;
`;

const Divide = styled.div`
  max-width: ${mspx(9)}px;
  margin: ${ms(3)}rem 0;
  height: 3px;
  background: darkslategray;
`;

const Box = styled.div`
  display: inline-block;
  background: darkslategray;
  margin-right: ${props => props.size};
  width: ${props => props.size};
  height: ${props => props.size};
`;

const boxes = [`${ms(2)}rem`, `${ms(3)}rem`, `${ms(4)}rem`, `${ms(5)}rem`, `${ms(6)}rem`];

class Example extends Component {
  render() {
    return (
      <Container>
        <Heading1>Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</Heading1>
        <Heading2>Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</Heading2>
        
        <Divide />
        
        {boxes.map(size => <Box size={size} />)}
      </Container>
    );
  }
};

const root = document.querySelector('.example');
render(<Example />, root);
