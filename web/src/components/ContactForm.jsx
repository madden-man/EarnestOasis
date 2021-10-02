import React, { useState } from 'react';

import './contactForm.css'

export const ContactForm = () => {
  const [fields, setFields] = useState({
    name: '',
    typeOfContact: 'Phone Number',
    contactInfo: '',
    message: '',
  });

  const sendContactInfo = (fields) => {
    alert('We can\'t do this quite yet - sorry!');
  }

  const placeholders = {
    'Phone Number': 'e.g., (777) 777-7777',
    'Email Address': 'e.g., jchrist@gmail.com',
    'Carrier Pidgeon': 'e.g., Doug'
  }

  return (
    <div className="contact-form__container">
      <div className="contact-form">
        <span>Name</span>
        <input value={fields.name} onChange={(e) => setFields({ ...fields, name: e.target.value })} placeholder="e.g., Jesus Christ" />
        <span>Contact Info</span>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <select value={fields.typeOfContact} onChange={(e) => setFields({ ...fields, typeOfContact: e.target.value })}>
            <option name="phone-number">Phone Number</option>
            <option name="email-address">Email Address</option>
            <option name="carrier-pidgeon">Carrier Pidgeon</option>
          </select>
          <input value={fields.contactInfo} onChange={(e) => setFields({ ...fields, contactInfo: e.target.value })} className="no-border-radius" placeholder={placeholders[fields.typeOfContact]} />
        </div>
        <span>Message</span>
        <textarea value={fields.message} rows={7} onChange={(e) => setFields({ ...fields, message: e.target.value })} placeholder="Oh hey I'm back." />
        <button onClick={() => sendContactInfo(fields)}>Send Message!</button>
      </div>
    </div>
  )
}