// CompanyOverview.js

import React from 'react';
import './MissionAndVision.css';
import '../../App.css';
import Footer from '../Footer';

export default function MissionAndVision() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <div className="mission-vision-overview-container">
          <h1 className='mission-vision-overview-title'>Mission And Vision</h1>

          <div className="mission-vision-overview-section">
            <h3>Mission Statement</h3>
            <p>
            At Linkwel, our mission is to design and manufacture high-quality elevators, cranes, and their components that enhance safety, efficiency, and reliability in material handling and vertical transportation. We are committed to exceeding customer expectations through innovative solutions and exceptional service. Our goal is to continuously advance our technologies and processes, ensuring our products meet the highest standards of excellence and contribute to the progress of industries worldwide.
            </p>
          </div>

          <hr />

          <div className="mission-vision-overview-section">
            <h3>Vision Statement</h3>
            <p>
            Our vision at Linkwel is to be a global leader in the elevator and crane manufacturing industry, recognized for our dedication to quality, innovation, and customer satisfaction. We aspire to revolutionize material handling and vertical transportation through cutting-edge solutions that set new benchmarks for safety and efficiency. By fostering a culture of continuous improvement and sustainability, we aim to create lasting value for our customers, employees, and communities, driving progress and prosperity in the markets we serve.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
