import React, { Fragment } from 'react';
import '../assets/stylesheets/app.scss';

import HeroImg from './heroImg';
import NavigationBar from './nav';
import About from './about';


function App() {
  return (
    <Fragment>
      <HeroImg />
      <NavigationBar />
      <About />
    </Fragment>
  );
}

export default App;
