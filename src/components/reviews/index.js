import React from 'react';
import './reviews.scss';

export default () => {
    return (
        <div className="container-fluid reviewsContainer">
            <div className="row">
                <div className="d-inline-block largeReviewContainer col-lg-6">
                    <div className="largeReviewTextContainer">
                        <h1 className="largeReviewText offset-lg-3 col-lg-6">Lorem ipsum
                    </h1>
                        <h1 className="largeReviewText offset-lg-3 col-lg-6">dolor sit amet
                    </h1>
                    </div>
                    <div className="starsContainer offset-lg-3 col-lg-6">
                        <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                    </div>
                </div>
                <div className="d-inline-block reviewCarousalContainer col-lg-6">
                    <h1>Pure CSS3 Text Carousel</h1>
                    <div class="content-slider">
                        <div class="slider">
                            <div class="mask">
                                <ul>
                                    <li class="anim">
                                        <div class="quote">Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula. Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula.Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in.</div>
                                        <div class="source">- John Doe</div>
                                    </li>
                                    <li class="anim">
                                        <div class="quote">Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula. Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula.Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in.</div>                                        <div class="source">- Another person</div>
                                    </li>
                                    {/* <li class="anim3">
                                        <div class="quote">Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula. Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula.Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in.</div>                                        <div class="source">- Animal</div>
                                    </li>
                                    <li class="anim4">
                                        <div class="quote">Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula. Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula.Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in.</div>                                        <div class="source">- Plant</div>
                                    </li>
                                    <li class="anim5">
                                        <div class="quote">Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula. Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula.Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in.</div>                                        <div class="source">- Cassidy</div>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}