//
//  js/ms.js
//
//  Copyright (c) 07/01/2018 Jason Howmans 
//  Permission is hereby granted, free of charge, to any person obtaining a copy
//  of this software and associated documentation files (the "Software"), to deal
//  in the Software without restriction, including without limitation the rights
//  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//  copies of the Software, and to permit persons to whom the Software is
//  furnished to do so, subject to the following conditions:
//  
//  The above copyright notice and this permission notice shall be included in all
//  copies or substantial portions of the Software.
//  
//  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
//  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
//  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
//  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
//  DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
//  OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
//  OR OTHER DEALINGS IN THE SOFTWARE.
//


let msjs = {
  scale: 1.333,
  px: 16,
}

export const msopts = optsObj => {
  if (typeof optsObj !== 'object' || ! Object.keys(optsObj).length) {
    console.warn('msopts requires an object.');
    return
  }
  msjs = Object.assign({}, msjs, optsObj);
}

export const ms = exponent => {
  let val = 1;
  let e = exponent > -1 ? exponent : exponent * -1;
  while(e) {
    if (exponent < 0) {
      val = val / msjs.scale;
    } else {
      val = val * msjs.scale;
    }
    e--
  }
  return val;
}

/**
 *  Output a scale value in pixels
 *  @param {number} exponent
 *  @param {number} pxBase? 
 *  @return {number}
 */
export const mspx = (exponent, pxBase=msjs.px) => Math.round(ms(exponent) * pxBase);
