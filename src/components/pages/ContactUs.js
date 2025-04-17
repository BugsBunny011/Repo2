import React from 'react';
import './ContactUs.css';
import '../../App.css';
import Footer from '../Footer';

export default function ContactUs() {
  return (
    <div className="contact-us-container">
      <div className="contact-us-header">
        <img src="/Final Images/LinkwelGogleMapsbgimage.png" alt="Let's have a talk" className="contact-us-image" />
        <h1 className="contact-us-title">Let's have a talk</h1>
      </div>

      <div className="contact-us-content">
        <div className="contact-us-section">
          <h2>Google Maps Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.465537522285!2d77.27992087518734!3d28.52572368892363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce14ffbb2d6e1%3A0xc060f8eff80362a9!2sLinkwel%20Engineers!5e0!3m2!1sen!2sin!4v1724265367045!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

        </div>
        <hr />
        <div className="contact-us-section">
          <h2>Meet Us</h2>
          <p>Phone: +91 9818511177, 9810371220</p>
          <p>Email: linkwelengineers@gmail.com</p>
          <p>Address: 62, DSIDC Complex, Okhla, Okhla Phase I, Nd-20, New Delhi, Delhi 110020</p>
        </div>
        <hr />
        <div className="contact-us-section">
          <h2>Pitch Us</h2>
          <p>If you have any ideas or business proposals, feel free to pitch them to us. We are always open to new and innovative concepts.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
