import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
            Follow us on linkedin for more information.
        </p>
        <p className='footer-subscription-text'>
            Get a discount when you have followed us on Linkedin.
        </p>
        
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
                <h2>About Us</h2>
                <Link to='/sign-up'>How it works</Link>
                <Link to='/company-overview'>Company Overview</Link>
            </div>
            
        </div>
        <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
                <h2>Contact Us</h2>
                <Link to='/sign-up'>Contact</Link>
                <Link to='/sign-up'>Destination</Link>
            </div>
            
        </div>
        <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
                <h2>Products/Services</h2>
                <Link to='/'>Product Categories</Link>
                <Link to='/'>Detailed Product Information</Link>
                <Link to='/'>Service Descriptions</Link>
            </div> 
        </div>
        <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
                <h2>Social Media</h2>
                <Link to='https://www.linkedin.com/company/linkwel-engineers-le/about/?viewAsMember=true'>Linkedin</Link>
            </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
            <div className='footer-logo'>
            <Link to='#' className='footer-logo'>
          <img
            src='/Final Images/Linkwel logo nobg .png'
            alt='Logo'
            className='footer-logo-img'
          />
        </Link>
            </div>
            <small className='website-rights'></small>
            <div className='social-icons'>
                <Link className='social-icon-link linkedin'
                to='https://www.linkedin.com/company/linkwel-engineers-le/about/?viewAsMember=true'
                target='_blank'
                aria-label='Linkedin'
                >
                    <i className='fab fa-linkedin'></i>
                </Link>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
