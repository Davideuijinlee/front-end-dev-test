import React, { Fragment } from 'react';
import '../assets/stylesheets/app.scss';

import HeroImg from './heroImg';
import NavigationBar from './nav';
import About from './about';
import MeetTheTeam from './meetTheTeam';


function App() {
  return (
    <Fragment>
      <HeroImg />
      <NavigationBar />
      <About />
      <MeetTheTeam />
    </Fragment>
  );
}

export default App;
