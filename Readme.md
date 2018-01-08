## Modular Scale Helpers

This repository contains a host of different helpers for working with modular scales. So far there's support for: SCSS, Javascript and Styled Components.

You can learn more about modular scales [here](http://www.modularscale.com/?20&px&1.125), or learn about this project [here](https://nosaj.io/r/modular-scale).

### How to use modular-scale helpers
The easiest way to use this in your own project is to use NPM:

```sh
npm install --save modularscale-helpers
```

<a name="styled-components"></a>
#### Using JS helpers with Styled Components 
See the [example](https://github.com/nosajio/modularscale/tree/master/examples/modular-scale/example.js) using modularscale helpers with Styled Components.

For more information about the modularscale Javascript helpers, refer to the [Javascript section](#javascript) of the readme.

<a name="scss"></a>
#### Using SCSS helpers
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


<a name="javascript"></a>
#### Using Javascript helpers
[See example](https://github.com/nosajio/modularscale/tree/master/examples/js/example.js).

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

### Contribute
If you find a bug or think there's a missing helper, then file a bug / feature request. If you feel like fixing a bug or implementing a helper of your own, make a pull request and I'll get it merged in.
