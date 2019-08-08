import React, { Fragment } from 'react';
import '../assets/stylesheets/app.scss';

import HeroImg from './heroImg';
import NavigationBar from './nav';
import About from './about';
import MeetTheTeam from './meetTheTeam';
import WhatWeDo from './whatwedo';
import LearnMore from './learnMore';
import Reviews from './reviews';
import Contact from './contact';
import Footer from './footer';

function App() {
  return (
    <Fragment>
      <HeroImg />
      <NavigationBar />
      <About />
      <MeetTheTeam />
      <WhatWeDo />
      <LearnMore />
      <Reviews />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default App;
