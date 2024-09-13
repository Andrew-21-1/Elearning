import React from 'react';
import OptionCard from './OptionCard';
import styles from './LearningStyleSelector.module.css';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import '../css/Card1.css';
import Image from '../assets/images/girl2.png';

const learningStyles = [
  {
    title: 'Are you a reader/writer',
    imageSrc: 'option1',
    buttonText: 'Select',
  },
  {
    title: 'Are you a Kinesthetic learning',
    imageSrc: 'option2',
    buttonText: 'Select',
  },
];

function Card4({ handleNextStep }) {
  return (
    <Container className={styles.cardContainer}>
      <Row className={styles.rowContainer}>
        <Col>
          <OptionCard title={learningStyles[0].title} imageSrc={learningStyles[0].imageSrc} buttonText={learningStyles[0].buttonText} handleNextStep={handleNextStep} className={styles.leftCard} />
        </Col>
        <Col className={styles.centerCol}>
          <div className={styles.centerContent}>
            <img src={Image} alt="Decorative illustration" className={styles.centerImage} />
            <h1 className={styles.greeting}>Hey, there!</h1>
            <h2 className={styles.question}>What is your learning style?</h2>
            <p className={styles.instruction}>Please Choose</p>
          </div>
        </Col>
        <Col>
          <OptionCard title={learningStyles[1].title} imageSrc={learningStyles[1].imageSrc} buttonText={learningStyles[1].buttonText} handleNextStep={handleNextStep} className={styles.rightCard} />
        </Col>
      </Row>
    </Container>
  );
}

export default Card4;
