## Modular Scale Helpers

This repository contains a host of different helpers for working with modular scales. So far there's support for: SCSS, Javascript and Styled Components.

You can learn more about modular scales [here](http://www.modularscale.com/?20&px&1.125), or learn about this project [here](https://nosaj.io/r/modular-scale).

## How to use the helpers
The easiest way to use this in your own project is to use NPM:

```sh
npm install --save modularscale-helpers
```

<a name="styled-components"></a>
## Styled Components 
See the [example](https://github.com/nosajio/modularscale/tree/master/examples/styled-components/example.js).

Here are a few ways to use the modular scale with SC:

**Declarative positioning**
```js
import { div, h1 } from 'styled-components';
import { ms } from 'modularscale-helpers';

const H1 = h1`
  font-size: ${props => ms(props.fontSize || 1) };
`;

const Box = div`
  width: 100%;
  max-width: ${props => ms(props.maxWidth || 10) };
  margin: 0 auto;
`;

// These will behave as simple Boxes
const Wrapper = Box.extend``;
const Main = Box.extend``;

// Add a margin class for the Header only
const Header = Box.extend` 
  margin-bottom: ${props => ms(props.marginBottom || 1) }; 
`;

// Producing a mental image of the UI is easier when the sizings of elements are 
// attached to the elements themselves.
<Wrapper>
  <Header maxWidth={12} marginBottom={1}>
    <H1 fontSize={2}>There are times</H1>
  </Header>
  <Main maxWidth={12}>
    // ...
  </Main>
</Wrapper>
```

For more information about the Javascript helpers, refer to the [Javascript section](#javascript) of the readme below.

<a name="javascript"></a>
## Javascript 
[See example](https://github.com/nosajio/modularscale/tree/master/examples/js/example.js).

**`msopts({...})`**  
`msopts` is used for configuring the scale functions. It takes a plain configuration object that has just two properties:

- `options.scale: Number` - The scale to use. This is usually a floating point value between 0 and 2. Default is: 1.333. Find more scales on this [website](http://www.modularscale.com/?20&px&1.125).
- `options.px: Number` - This should be set to the number you want to be multiplied by the scale value when using `mspx()`. It's recommended to set this to the same pixel value as your root element's font-size.

**Full example**
```js
import { ms, mspx, msopts } from 'modularscale-helpers';

// msopts
// Override default scale values
msopts({
  // Set the scale value. 1.618 is also known as 
  // the 'golden ratio'.
  scale: 1.618,
  // This pixel value should be the same as your root 
  // font size (default for most browsers is 16).
  // You should only set this if you use the mspx() function.
  px: 18,
});

// ms(exponent) -> number
// Pass an exponent value and it will output the scale value for that step.
ms(1)                 // -> 1.618
ms(10)                // -> 122.966035902
ms(-3)                // -> 0.236082855

// mspx(exponent, pxBase?) -> number
// Pass in a exponent and it will use px value in the msopts object above 
// as the base.
mspx(1)               // -> 29 
mspx(5)               // -> 200
`${mspx(-1)}px`       // -> '11px'

// mspx can also be used with any base value
mspx(2, 30)           // -> 79
mspx(2, 10)           // -> 26
`${mspx(5, 27)}px`    // -> '299px'
```


<a name="scss"></a>
## SCSS 
[See example](https://github.com/nosajio/modularscale/tree/master/examples/scss/example.scss).

Before using the SASS helpers, there are some global variables that you can set to configure the scale:
```scss
// Import the helpers from node_modules
@import "modularscale-helpers/scss/ms";

// Configuration variables - setting these is optional. You should only set them if
// you need to.

// Set the scale
$ms-scale: 1.618;
// Only set this if you want to output pixel values (see next example)
$ms-px: 18px;

...
```

There are three methods available to use in your SCSS:

```scss
// ms($exponent) -> float
// Where most of the magic happens. Pass in a step value and it will output the scale value. 
$val: ms(1);          // -> 1.618
$val: ms(2);          // -> 2.617924
$val: ms(3);          // -> 4.235801032
$val: ms(-1);         // -> 0.618046972


// msrem($exponent) -> float
// Same as ms() except this will append 'rem' to the end of the scale value, making it easier to use without string concatenation.
$val: msrem(2);       // -> 2.617924rem
$val: msrem(3);       // -> 4.235801032rem
$val: msrem(-1);      // -> 0.618046972rem


// mspx($exponent, $base?) -> px value
// This is where the $ms-px variable above comes in. Use with a single argument to output a pixel value that uses the value of $ms-mx as a base.
$val: mspx(2);        // -> 47px
$val: mspx(1);        // -> 29px
$val: mspx(-2);       // -> 7px

// mspx can also be used with any base value:
$val: mspx(2, 10px);  // -> 26px
$val: mspx(0, 10px);  // -> 10px
$val: mspx(-2, 20px); // -> 8px
```

### Contribute
If you find a bug or think there's a missing helper, then file a bug / feature request. If you feel like fixing a bug or implementing a helper of your own, make a pull request and I'll get it merged in.
