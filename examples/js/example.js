import { msopts, ms, mspx } from '../../js/ms';

msopts({
  px: 18,
});

const heading1 = document.querySelector('.heading-1');
const heading2 = document.querySelector('.heading-2');

const bodyStyles = [
  `margin: ${ms(4)}rem;`
]

const heading1Styles = [
  `font-size: ${mspx(3)}px`
]

const heading2Styles = [
  `font-size: ${ms(6)}rem`
]

document.body.setAttribute('style', bodyStyles.join('; '));
heading1.setAttribute('style',  heading1Styles.join('; '));
heading2.setAttribute('style', heading2Styles.join('; '));
