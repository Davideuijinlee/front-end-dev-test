import React from 'react';
import './footer.scss';
import facebook from '../../assets/images/svg/facebook.svg';
import instagram from '../../assets/images/svg/instagram.svg';

export default () => {
    return(
        <div className="container-fluid footerContainer">
            <div className="footerTextContainer">
                <span>Follow Us:</span>
            </div>
            <div className="offset-xs-4 offset-sm-4 offset-md-5 offset-lg-5 offset-xl-5 socialImgContainer">
                <img className="socialImg" src={instagram} alt="Instagram Logo"/>
                <img className="socialImg" src={facebook} alt="Facebook Logo"/>
            </div>
        </div>
    )
}