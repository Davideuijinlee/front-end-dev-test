import React, { Component } from 'react';
import './whatWeDo.scss';
import expertise from '../../assets/images/svg/home-expertise.svg';
import hygiene from '../../assets/images/svg/home-hygiene.svg';
import lab from '../../assets/images/svg/home-lab.svg';
import retention from '../../assets/images/svg/home-retention.svg';



export default class WhatWeDo extends Component{
    state = {
        images: [
            `${expertise}`,
            `${hygiene}`,
            `${lab}`,
            `${retention}`,
        ]
    }

    render(){
        const { images } = this.state;
        return(
        <div className="container-fluid whatWeDoContainer">
            {images.map(images => {
                return (
                    <div key={images} className="d-inline-block  col-sm-12 col-md-6 col-lg-3 whatWeDoItemContainer">
                    <div className="hoverBoxContainer hoverBoxContainerType">
                        <div className="hoverBoxPreview">
                            <img src={images} alt="Services offered by Rooster Grin"/>
                            <span className="hoverBoxLabel">Lorem Ipsum</span>
                            <span className="hoverBoxLabelText">Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula.</span>
                        </div>
                    </div>
                    </div>
                )
            })}
            </div>
        )
    }
}