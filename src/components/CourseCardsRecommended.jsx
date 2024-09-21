import React, { useState, useRef, useEffect } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import "../css/CourseCardsRecommended.css";
import { MDBIcon } from "mdb-react-ui-kit";

const CourseCardsRecommended = () => {
  const [courses, setCourses] = useState([]);
  const carouselRef = useRef(null); // Reference for the carousel

  // Temporary static array for testing
  const dummyCourses = [
    { title: "Math Garde 8", image: "https://via.placeholder.com/150" },
    { title: "Math Garde 6", image: "https://via.placeholder.com/150" },
    { title: "Science Garde 1", image: "https://via.placeholder.com/150" },
    { title: "Math Garde 4", image: "https://via.placeholder.com/150" },
    { title: "Science Garde 8", image: "https://via.placeholder.com/150" },
    { title: "Math Garde 3", image: "https://via.placeholder.com/150" },
  ];

  // Simulating fetching from backend with static array
  useEffect(() => {
    setCourses(dummyCourses);
  }, []);

  // Scroll carousel left
  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      top: 0,
      left: -300, // Adjust scroll distance as needed
      behavior: "smooth",
    });
  };

  // Scroll carousel right
  const scrollRight = () => {
    carouselRef.current.scrollBy({
      top: 0,
      left: 300, // Adjust scroll distance as needed
      behavior: "smooth",
    });
  };

  return (
    <section className="course-card-section">
      <div className="course-card-container">
        <h2 className="header-title">Recommended for you</h2>
        <div className="carousel-container">
          <div>
            {/* Scrollable Course Cards */}
            <div className="scrollable-row" ref={carouselRef}>
              <Row style={{ flexWrap: "nowrap" }}>
                {courses.map((course, index) => (
                  <Col key={index} md={3}>
                    <Card className="course-card">
                      <Card.Body className="course-card-body">
                        <Card.Img
                          variant="top"
                          src={course.image}
                          alt={`Course ${index}`}
                        />
                        <Card.Title className="course-card-title">
                          {course.title}
                        </Card.Title>
                        {/* <p>Lesson {index + 1}</p> */}
                      </Card.Body>
                      <Card.Footer className="course-card-footer">
                        <div className="course-card-footer-body">
                          <p className="lesson">Lesson {index + 1}</p>
                        </div>
                      </Card.Footer>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
          <div className="buttons-container">
            {/* Left Arrow */}
            <Button className="scroll-button left" onClick={scrollLeft}>
              <MDBIcon fas icon="angle-left" />{" "}
            </Button>
            {/* Right Arrow */}
            <Button className="scroll-button right" onClick={scrollRight}>
              <MDBIcon fas icon="angle-right" />{" "}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseCardsRecommended;
