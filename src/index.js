import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
// import Statistics from './components/Statistics';
// import "./index.css";
// import App from "./App";
// import * as serviceWorker from "./serviceWorker";

// const link = React.createElement(
//   'a',
//   {
//     href: 'https://reactjs.org/',
//     target: '_blank',
//     rel: 'noreferrer noopener',
//   },
//   'Ссылка на reactjs.org',
// );

// const image = React.createElement('img', {
//   src:
//     'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640',
//   alt: 'Tacos With Lime',
//   width: 640,
// });

// const title = React.createElement('h2', null, 'Tacos With Lime');
// const price = React.createElement('p', null, 'Price: 10.99$');
// const button = React.createElement('button', { type: 'button' }, 'Add to cart');

// const product = React.createElement('div', {
//   children: [image, title, price, button],
// });

// console.log(product);

// const imageUrl =
//   'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640';
// const price = 10.99;

// const product = (
//   <div>
//     <img src={imageUrl} alt="Tacos With Lime" width="640" />
//     <h2>Tacos With Lime</h2>
//     <p>Price: {price}$</p>
//     <button type="button">Add to cart</button>
//   </div>
// );

function randomNum() {
    return Math.floor(Math.random() * 256);
  }
  
  function randomRGB() {
    var red = randomNum();
    var green = randomNum();
    var blue = randomNum();

    return `rgb(${red},${green},${blue})`
    // return [red,green,blue];
  }

//   console.log(randomRGB());

ReactDOM.render(<App />, document.querySelector('#root'));
