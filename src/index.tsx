import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Here, the order matters
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const onScroll = (ev: Event) => {
  const mainNav = document.getElementById('mainNav');
  if (!mainNav)
    return;
  const top = window.pageYOffset || document.documentElement.scrollTop;
  if (top > 100) {
    mainNav.classList.add('navbar-shrink');
  } else {
    mainNav.classList.remove('navbar-shrink');
  }
};

window.addEventListener('scroll', onScroll);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const body = document.getElementsByTagName("body");
body.item(0)?.classList.add('page-top');

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
