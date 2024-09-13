import React, { useState } from 'react'; // Import useState here
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../css/Card2.css';
import student from '../assets/images/student.svg'; // Replace with your asset path
import title from '../assets/images/title1.png'; // Replace with your asset path
import chart from '../assets/images/chart2.png'; // Replace with your asset path
import { useTranslation } from 'react-i18next';

const Card2 = () => {
  const { t } = useTranslation();
  const today = new Date();

  // Format the date as 'Nov. 22, 2025'
  const formattedDate = today.toLocaleDateString('en-US', {
    month: 'short', // 'Nov'
    day: '2-digit', // '22'
    year: 'numeric', // '2025'
  }); // Removes the comma after the day

  return (
    <Container className="card-container">
      <Row className="row-container">
        <Row className="header-row">
          <div className="header">
            <div className="student">
              <div>
                <img style={{ paddingRight: '7px' }} src={student} alt="Login Asset"></img>
              </div>
              <p>{t('cards.welcome')}</p>
            </div>
            <p>{formattedDate}</p>
          </div>
        </Row>
      </Row>
      <Row className="row-container" style={{ marginTop: '10px' }}>
        <img style={{ width: '80%', marginTop: '20px' }} src={title} alt="welcome Asset"></img>
        <img style={{ width: '100%' }} src={chart} alt="chart Asset"></img>
      </Row>
    </Container>
  );
};

export default Card2;
