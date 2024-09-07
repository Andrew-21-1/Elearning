import React from "react";
import OptionCard from "./OptionCard";
import styles from "./LearningStyleSelector.module.css";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import "../css/Card1.css";
import Image from "../assets/images/girl.png";

const learningStyles = [
  {
    title: "Are you a visual learner",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/673118b98efe11157988a61c979915b80e8bba414c5247b8d6f74cbe1e0d6c9a?placeholderIfAbsent=true&apiKey=628cc20a31df41c7938f9c545fbd4bf9",
    buttonText: "Select",
  },
  {
    title: "Are you a visual learner",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/42e74eef31a252d9401bc65146c55db652cb4da426130294b3dce468955f9b8d?placeholderIfAbsent=true&apiKey=628cc20a31df41c7938f9c545fbd4bf9",
    buttonText: "Select",
  },
];

function Card4({ handleNextStep }) {
  return (
    <Container
      className="card-container"
      style={{ backgroundColor: "transparent", padding: 0, height: "35rem" }}
    >
      <Row
        className="row-container"
        style={{ alignItems: "flex-end", height: "100%", gap: "20px" }}
      >
        <Col>
          <OptionCard
            title={learningStyles[0].title}
            imageSrc={learningStyles[0].imageSrc}
            buttonText={learningStyles[0].buttonText}
            handleNextStep={handleNextStep}
            className={styles.leftCard}
          />
        </Col>
        <Col style={{ height: "100%" }}>
          <div className={styles.centerContent}>
            <img
              src={Image}
              alt="Decorative illustration"
              className={styles.centerImage}
            />
            <h1 className={styles.greeting}>Hey, there!</h1>
            <h2 className={styles.question}>What is your learning style?</h2>
            <p className={styles.instruction}>Please Choose</p>
          </div>
        </Col>
        <Col>
          <OptionCard
            title={learningStyles[1].title}
            imageSrc={learningStyles[1].imageSrc}
            buttonText={learningStyles[1].buttonText}
            handleNextStep={handleNextStep}
            className={styles.rightCard}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Card4;
