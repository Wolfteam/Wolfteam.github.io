import React, { Fragment } from 'react';
import './App.css';

import About from './components/About';
import Applications from './components/Applications';
import Contact from './components/Contact';
import Header from './components/Header';
import MainNav from './components/MainNav';
import Privacies from './components/Privacies';

function App() {
  return (
    <Fragment>
      <MainNav />
      <Header />
      <About />
      <Applications />
      <Privacies />
      <Contact />
      <footer style={{ padding: '100px 0' }}>
        <div className="container text-center">
          <p style={{ display: 'none' }}>Powered by <a href="http://startbootstrap.com/template-overviews/grayscale/">Start Bootstrap</a></p>
        </div>
      </footer>
    </Fragment>
  );
}

export default App;
