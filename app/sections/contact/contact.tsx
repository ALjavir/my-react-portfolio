import React, { useState } from 'react';
import './contact-style.css'; // Make sure to link your CSS file

export default function Contact() {
  const [service, setService] = useState('');

  return (
      <section id="contact" className="contact-section">
          
          <div className='contact-header' >
              

 <h2 className="contact-title">Contact me</h2>
      <p className="contact-subtitle">Cultivating Connections: Reach Out And Connect With Me</p>

          </div>
     

      <form className="contact-form">
        {/* Left Column Fields */}
        <div className="form-group">
          <input type="text" placeholder="Name" className="form-input" />
        </div>

        {/* Right Column Fields */}
        <div className="form-group">
          <input type="email" placeholder="Email" className="form-input" />
        </div>

        <div className="form-group">
          <input type="tel" placeholder="Phone Number" className="form-input" />
        </div>

        {/* Customized Dropdown Select Option */}
        <div className="form-group dropdown-wrapper">
          <select 
            value={service} 
            onChange={(e) => setService(e.target.value)}
            className="form-input form-select"
          >
            <option value="" disabled hidden>Service Of Interest</option>
            <option value="mobile-app">Mobile App Development</option>
            <option value="web-dev">Web Development</option>
            <option value="ui-ux">UI/UX Design</option>
          </select>
          {/* Custom SVG chevron arrow right-aligned */}
          <span className="dropdown-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
        </div>

        <div className="form-group">
          <input type="text" placeholder="Timeline" className="form-input" />
        </div>

        {/* Large Project Details Block */}
        <div className="form-group textarea-group">
          <textarea placeholder="Project Details..." className="form-input form-textarea"></textarea>
        </div>

        {/* Right-aligned Actions row */}
        <div className="form-actions">
          <button type="submit" className="form-submit-btn">Send</button>
        </div>
      </form>
    </section>
  );
}