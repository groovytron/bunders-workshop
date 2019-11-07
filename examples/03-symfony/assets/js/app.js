import '../scss/styles.scss';
import '../scss/other_styles.scss';
import Square from './Square.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('Document is loaded');
  console.log('This is the symfony project');

  const square = new Square(5);
  console.log(square);
  console.log(square.area());
});
