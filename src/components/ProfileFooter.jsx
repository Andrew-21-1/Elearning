import React, { useState, useRef, useEffect } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import "../css/ProfileFooter.css";
import { MDBIcon } from "mdb-react-ui-kit";

const ProfileFooter = () => {
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
      <div className="choice-card-container">
        <div>
          <Row className="choice-card-row-banner">
            <Row>
              {" "}
              <h2 className="banner-title">
                Online coaching lessons for remote learning.
              </h2>
            </Row>
            <Row>
              <p className="banner-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing
                elit, sed do eiusmod tempor
              </p>
            </Row>
            <Row>
              <div>
                {" "}
                <Button className="banner-button">Start learning now</Button>
              </div>
            </Row>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default ProfileFooter;
