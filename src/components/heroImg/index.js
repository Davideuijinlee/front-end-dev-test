import React from 'react';
import heroImg1 from '../../assets/images/hero_image/hero1.jpg';
import heroImg2 from '../../assets/images/hero_image/hero2.jpg';
import heroImg3 from '../../assets/images/hero_image/hero3.jpg';
import './heroImg.scss';

export default () => {
    return (
        <div id="heroImgCarousel" className="carousel slide carousel-fade" data-ride="carousel">
            <div class="carousel-inner">
                <div className="heroImgContainer carousel-item active" data-interval="5000">
                    <img src={heroImg1} className="heroImg d-block" alt="Nighttime photo of Golden Gate Bridge in San Francisco where Rooster Grin Digital Marketing Agency is located" />
                </div>
                <div className="heroImgContainer carousel-item" data-interval="5000">
                    <img src={heroImg2} className="heroImg d-block" alt="Evening photo of the city fo San Francisco" />
                </div>
                <div className="heroImgContainer carousel-item" data-interval="5000">
                    <img src={heroImg3} className="heroImg d-block" alt="Evening photo of the city fo San Francisco" />
                </div>
            </div>
        </div>
    )
};