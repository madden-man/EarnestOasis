import React, { useState } from 'react';

import './contactForm.css'

export const ContactForm = () => {
  const [fields, setFields] = useState({
    name: '',
    typeOfContact: '',
    contactInfo: '',
    message: '',
  });

  return (
    <div className="contact-form__container">
      <div className="contact-form">
        <span>Name</span>
        <input value={fields.name} onChange={(e) => setFields({ ...fields, name: e.target.value })} placeholder="e.g., Jesus Christ" />
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <select value={fields.typeOfContact} onChange={(e) => setFields({ ...fields, typeOfContact: e.target.value })}>
            <option name="phone-number">Phone Number</option>
            <option name="email-address">Email Address</option>
            <option name="carrier-pidgeon">Carrier Pidgeon</option>
          </select>
          <input value={fields.contactInfo} onChange={(e) => setFields({ ...fields, contactInfo: e.target.value })} />
        </div>
        <span>Message</span>
        <textarea value={fields.message} onChange={(e) => setFields({ ...fields, message: e.target.value })} placeholder="Oh hey I'm back." />
      </div>
    </div>
  )
}