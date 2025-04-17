import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [dropdown, setDropdown] = useState({ about: false, services: false, products: false });

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const toggleDropdown = (dropdownName) => {
    setDropdown((prevState) => ({
      ...prevState,
      [dropdownName]: !prevState[dropdownName],
    }));
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    return () => window.removeEventListener('resize', showButton);
  }, []);

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img
            src='/Final Images/Linkwel_Navbar_Logo.jpeg'
            alt='Logo'
            className='navbar-logo-img'
          />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <div className="nav-links" onClick={() => toggleDropdown('about')}>
              About Us
            </div>
            {dropdown.about && (
              <div className="dropdown-content">
                <Link to="/company-overview" onClick={closeMobileMenu}>Company Overview</Link>
                <Link to="/our-story" onClick={closeMobileMenu}>Our Story</Link>
                <Link to="/mission-vision" onClick={closeMobileMenu}>Mission & Vision</Link>
              </div>
            )}
          </li>
          <li className="nav-item">
            
            <div className="nav-links" onClick={() => toggleDropdown('services')}>
              Services
            </div>
            {dropdown.services && (
              <div className="dropdown-content">
                <Link to="/installation" onClick={closeMobileMenu}>Installation</Link>
                <Link to="/maintenance" onClick={closeMobileMenu}>Maintenance</Link>
                <Link to="/consultation" onClick={closeMobileMenu}>Consultation</Link>
                <Link to="/repair-services" onClick={closeMobileMenu}>Repair Services</Link>
                <Link to="/training" onClick={closeMobileMenu}>Training</Link>
              </div>
            )}
          </li>
          <li className="nav-item">
            <div className="nav-links" onClick={() => toggleDropdown('products')}>
              
            </div>
            {dropdown.products && (
              <div className="dropdown-content">
                <Link to="/lifts" onClick={closeMobileMenu}>Lifts</Link>
                <Link to="/cranes" onClick={closeMobileMenu}>Cranes</Link>
                <Link to="/accessories" onClick={closeMobileMenu}>Accessories</Link>
                <Link to="/product-catalog" onClick={closeMobileMenu}>Product Catalog</Link>
                <Link to="/custom-solutions" onClick={closeMobileMenu}>Custom Solutions</Link>
              </div>
            )}
          </li>
          <li className="nav-item">
            <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
              Contact Us
            </Link>
          </li>
        </ul>
        {button && <Button buttonStyle="btn--outline">Contact Us</Button>}
      </div>
    </nav>
  );
}

export default Navbar;
