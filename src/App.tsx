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
    </Fragment>
  );
}

export default App;
