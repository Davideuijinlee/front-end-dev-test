import React from 'react';
import './contact.scss';
import ContactForm from './contactForm';
import ContactInfo from './contactInfo';

export default () => {
    return (
        <div className="row contactContainer">
            <ContactForm/>
            <ContactInfo/>
        </div>
    )
}
