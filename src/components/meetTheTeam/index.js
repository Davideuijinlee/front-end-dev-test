import React from 'react';
import './meetTheTeam.scss';
import teamBanner from '../../assets/images/banner/banner-1.jpg';

export default () => {
    return (
        <div className="meetContainer">
            <div className="row">
                <div className="d-none d-lg-block col-12 meetImgContainer">
                    <img className="meetImg" src={teamBanner} alt="Loving mother spending quality time with her son on a laptop" />
                </div>
                <div className="meetTextContainer col-lg-6">
                    <h1 className="meetTitle offset-lg-3 col-lg-6">Lorem Ipsum
                    </h1>
                    <button type="button" className="btn btn-warning">Learn More</button>
                </div>
            </div>
        </div>
    )
}