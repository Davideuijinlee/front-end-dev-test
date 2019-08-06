import React from 'react';
import './about.scss';
import loremImg1 from '../../assets/images/lorem_images/img-1.jpg';

export default () => {
    return(
        <div className="container-fluid aboutContainer">
            <div className="row col-12">
                <div className="aboutTextContainer col-lg-6">
                    <h1 className="aboutTitle offset-lg-3 col-lg-6">Lorem Ipsum
                    </h1>
                    <div className="aboutText offset-lg-3 col-lg-6">Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula, lacus est vehicula donec. Quam in ac quam. Duis et, non arcu imperdiet sem tellus suspendisse. Condimentum non aliquet sed, quisque risus vitae semper duis feugiat .
                    </div>

                    <a href="place" className="offset-lg-3 col-lg-6">Lorem Ipsum</a>

                </div>
                <div className="aboutImgContainer col-lg-6">
                    <img className="aboutImg" src={loremImg1} alt="two hikers demonstrating excellent teamwork"/>
                </div>
            </div>
        </div>
    )
}