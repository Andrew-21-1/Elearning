import React, { useState, useRef, useEffect } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import "../css/LessonCards.css";
import { MDBIcon } from "mdb-react-ui-kit";

const LessonCards = () => {
  const [lessons, setLessons] = useState([]);
  const carouselRef = useRef(null); // Reference for the carousel

  // Temporary static array for testing
  const dummyLessons = [
    {
      title: "Design",
      image: "https://via.placeholder.com/150",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    },
    {
      title: "Development",
      image: "https://via.placeholder.com/150",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    },
    {
      title: "Development",
      image: "https://via.placeholder.com/150",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    },
    {
      title: "Business",
      image: "https://via.placeholder.com/150",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    },
    {
      title: "Marketing",
      image: "https://via.placeholder.com/150",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    },
    {
      title: "Photography",
      image: "https://via.placeholder.com/150",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    },
    {
      title: "Acting",
      image: "https://via.placeholder.com/150",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    },
    {
      title: "Business",
      image: "https://via.placeholder.com/150",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    },
  ];

  // Simulating fetching from backend with static array
  useEffect(() => {
    setLessons(dummyLessons);
  }, []);

  return (
    <section className="lesson-card-section">
      <div className="lesson-card-container">
        <h2 className="header-title">Lessons</h2>
        <div className="lesson-container">
          <div>
            {/* Scrollable Course Cards */}
            <div className="scrollable-row">
              <Row className="g-0">
                {lessons.map((lesson, index) => (
                  <Col
                    key={index}
                    md={2}
                    sm={4}
                    xs={12}
                    className="mb-6"
                    style={{
                      margin: "20px",
                      boxShadow:
                        "0 4px 8px 0 rgba(47, 50, 125, 0.1), 0 6px 20px 0 rgba(47, 50, 125, 0.1)",
                      borderRadius: "20px",
                    }}
                  >
                    <Card className="lesson-card">
                      <Card.Header
                        style={{
                          border: "none",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Card.Img
                          variant="top"
                          src={lesson.image}
                          alt={`Lesson ${index}`}
                        />
                      </Card.Header>
                      <Card.Title className="lesson-card-title">
                        {lesson.title}
                      </Card.Title>
                      <Card.Text className="lesson-card-description">
                        {lesson.description}
                      </Card.Text>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LessonCards;
