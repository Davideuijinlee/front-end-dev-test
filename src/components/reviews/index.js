import React from 'react';
import './reviews.scss';
import LargeReview from './largeReview';

export default () => {
    return (
        <div className="container-fluid reviewsContainer">
            <div className="row">
                <div className="d-inline-block largeReviewContainer col-lg-6">
                    <LargeReview/>
                    {/* <div className="largeReviewTextContainer">
                        <h1 className="largeReviewText offset-lg-3 col-lg-6">Lorem ipsum
                    </h1>
                        <h1 className="largeReviewText offset-lg-3 col-lg-6">dolor sit amet
                    </h1>
                    </div>
                    <div className="starsContainer offset-lg-3 col-lg-6">
                        <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                    </div> */}
                </div>
                <div className="d-inline-block reviewCarousalContainer col-lg-6">
                </div>
            </div>
        </div>
    )
}