import React from 'react';
import './meetTheTeam.scss';

export default () => {
    return (
        <div className="meetContainer">
            <div className="row">
                <div className="meetTextContainer col-sm-12 col-lg-6">
                    <h2 className="meetTitle offset-2 offset-sm-4 col-sm-6 offset-lg-3 col-lg-6">Lorem Ipsum
                    </h2>
                    <button type="button" className="meetTheTeamBtn offset-4 col-3 offset-sm-6 col-sm-4 offset-md-4 offset-lg-3 col-lg-3 btn btn-warning">Learn More</button>
                </div>
            </div>
        </div>
    )
}