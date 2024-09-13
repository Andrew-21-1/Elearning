import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import '../css/Card1.css';
import student from '../assets/images/student.svg';
import title from '../assets/images/title1.png';
import chart from '../assets/images/chart1.png';

const Card1 = () => {
  const { t } = useTranslation();
  const today = new Date();

  // Format the date as 'Nov. 22, 2025'
  const formattedDate = today.toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });

  return (
    <Container className="card-container">
      <Row className="row-container">
        <Row className="header-row">
          <div className="header">
            <div className="student">
              <div>
                <img src={student} alt="Login Asset" className="student-img" />
              </div>
              <p>{t('cards.welcome')}</p>
            </div>
            <p>{formattedDate}</p>
          </div>
        </Row>
      </Row>
      <Row className="row-container title-row">
        <img src={title} alt="welcome Asset" className="title-img" />
        <img src={chart} alt="chart Asset" className="chart-img" />
      </Row>
    </Container>
  );
};

export default Card1;
