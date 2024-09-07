import React from "react";
import OptionCard from "./OptionCard";
import styles from "./LearningStyleSelector.module.css";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import "../css/Card1.css";

function Card4() {
  return (
    <Container className="card-container2">
      <Row className="row-container2" style={{ marginTop: "10px" }}>
        <div style={{ textAlign: "center", width: "50%", padding: "70px" }}>
          <h1 className={styles.greeting}>All Done!</h1>
          <h4 className={styles.question}>
            If you are here, you have completed your first assignment, you are
            already off to a great start. Let’s keep up the Progress!
          </h4>
        </div>
      </Row>
    </Container>
  );
}

export default Card4;
