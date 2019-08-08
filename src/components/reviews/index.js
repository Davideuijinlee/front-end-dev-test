import React from 'react';
import './reviews.scss';
import LargeReview from './largeReview';
import ReviewCarousal from './reviewCarousal';

export default () => {
    return (
        <div className="container-fluid reviewsContainer">
            <div className="row">
                <LargeReview/>
                <ReviewCarousal/>
            </div>
        </div>
    )
}