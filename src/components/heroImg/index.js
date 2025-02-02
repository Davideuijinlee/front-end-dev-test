import React, { Fragment } from 'react';
import hero1 from '../../assets/images/hero_images/hero1.jpg';
import hero2 from '../../assets/images/hero_images/hero2.jpg';
import hero3 from '../../assets/images/hero_images/hero3.jpg';
import './heroImg.scss';

import HeroText from './heroText';

export default () => {
    return (
        <Fragment>
            <HeroText/>
            <div id="heroImgCarousel" className="carousel slide carousel-fade" data-pause="false" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="heroImgContainer carousel-item active" data-interval="8000">
                        <img src={hero1} className="heroImg d-block" alt="Golden Gate Bridge in San Francisco at night" />
                    </div>
                    <div className="heroImgContainer carousel-item" data-interval="8000">
                        <img src={hero2} className="heroImg d-block" alt="A beautiful evening in San Francisco" />
                    </div>
                    <div className="heroImgContainer carousel-item" data-interval="8000">
                        <img src={hero3} className="heroImg d-block" alt="A beautiful evening in San Francisco" />
                    </div>
                </div>
            </div>

        </Fragment>

    )
};