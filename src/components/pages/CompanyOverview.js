// CompanyOverview.js

import React from 'react';
import './CompanyOverview.css';
import '../../App.css';
import Footer from '../Footer';

export default function CompanyOverview() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <div className="company-overview-container">
          <h1 className='company-overview-title'>COMPANY OVERVIEW</h1>

          <div className="company-overview-section">
            <h3>Brief History:</h3>
            <p>
              Linkwel, a pioneering technology company, was established in 1989 in Okhla, New Delhi, by the visionary entrepreneurs Mr. Suresh Bagga. Initially specializing in the manufacturing of crane components, Linkwel leveraged its expertise in engineering and innovation to expand its operations into the production of elevators and cranes.
            </p>
          </div>

          <hr />

          <div className="company-overview-section">
            <h3>Leadership:</h3>
            <p>
              Mr. Sunit Bagga, son of Mr. Suresh Bagga, now leads Linkwel as the company's CEO. With a deep understanding of the business and a commitment to innovation, Mr. Bagga continues to uphold Linkwel's legacy of excellence and drive its growth in the industry.
            </p>
          </div>

          <hr />

          <div className="company-overview-section">
            <h3>Mission Statement:</h3>
            <p>
              At Linkwel, our mission is to design and manufacture high-quality crane components, elevators, and cranes that enhance safety, efficiency, and reliability in material handling and vertical transportation. We are committed to exceeding customer expectations through innovative solutions and exceptional service.
            </p>
          </div>

          <hr />

          <div className="company-overview-section">
            <h3>Vision Statement:</h3>
            <p>
              At Linkwel, we are dedicated to the meticulous design and precision manufacturing of elevators, cranes, and their components, engineered to elevate safety, efficiency, and reliability in material handling and vertical transportation. Our unwavering commitment extends beyond product excellence; we strive to surpass customer expectations through relentless innovation and unparalleled service. Together, we propel industries forward, delivering solutions that inspire confidence and drive progress.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
