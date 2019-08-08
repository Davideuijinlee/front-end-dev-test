import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class ReviewCarousal extends Component {
    render() {
        return (
            <div className="d-inline-block reviewCarousalContainer col-lg-6">
                <div id="carouselExampleIndicators" className="carousalContainer carousel slide" data-ride="carousel">
                    {/* <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol> */}
                    <div className="carousalItemContainer carousel-inner">
                        <div className="carousalItem carousel-item active">
                            <div className="row">
                                <div className="medAdjustment col-12 reviewText">
                                <div className="d-block offset-3 offset-md-4 offset-lg-3 reviewer">John Doe 8/18/2019</div>
                                <div className="d-block offset-2 col-7 offset-md-1 col-md-8 offset-lg-1 col-lg-7 review">Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula. Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula.Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in.
                                </div>
                            </div>
                                </div>

                        </div>
                        {/* <div class="carousalItem carousel-item ">
                            <span>John Doe 8/18/2019</span>
                        </div>
                        <div class="carousalItem carousel-item ">
                            <span>John Doe 8/18/2019</span>
                        </div> */}
                    </div>
                    {/* <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a> */}
                </div>
            </div>

        );
    }
};