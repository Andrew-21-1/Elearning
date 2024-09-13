import React from 'react';
import OptionCard from './OptionCard';
import styles from './LearningStyleSelector.module.css';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import '../css/Card1.css';

function Card6() {
  return (
    <Container className={styles.cardContainer2}>
      <Row className={styles.rowContainer2}>
        <div className={styles.centeredContent}>
          <h1 className={styles.greeting}>All Done!</h1>
          <h4 className={styles.question}>If you are here, you have completed your first assignment, you are already off to a great start. Let’s keep up the Progress!</h4>
        </div>
      </Row>
    </Container>
  );
}

export default Card6;
