import React from 'react';
import hero1 from '../../assets/images/hero_images/hero1.jpg';
import hero2 from '../../assets/images/hero_images/hero2.jpg';
import hero3 from '../../assets/images/hero_images/hero3.jpg';
import './heroImg.scss';

export default () => {
    return (
        <div id="heroImgCarousel" className="carousel slide carousel-fade" data-ride="carousel">
            <div className="carousel-inner">
                <div className="heroImgContainer carousel-item active" data-interval="5000">
                {/* eslint-disable-next-line */}
                    <img src={hero1} className="heroImg d-block" alt="Nighttime photo of Golden Gate Bridge in San Francisco"  />
                </div>
                <div className="heroImgContainer carousel-item" data-interval="5000">
                {/* eslint-disable-next-line */}
                    <img src={hero2} className="heroImg d-block" alt="Evening photo of the city of San Francisco" />
                </div>
                <div className="heroImgContainer carousel-item" data-interval="5000">
                 {/* eslint-disable-next-line */}
                    <img src={hero3} className="heroImg d-block" alt="Evening photo of the city of San Francisco" />
                </div>
            </div>
        </div>
    )
};