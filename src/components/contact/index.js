import React from 'react';
import './contact.scss';
import ContactForm from './contactForm';
import ContactInfo from './contactInfo';

export default () => {
    return (
        <div className="contactContainer">
            <ContactForm/>
            <ContactInfo/>
        </div>
    )
}
