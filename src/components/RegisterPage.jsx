import React, { useState, useEffect } from "react";
import { Button, Form, Container, Row, Col, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../css/RegisterPage.css";
import registerImage from "../assets/images/register.png";
import { useTranslation } from "react-i18next";
import {
  FaEye,
  FaEyeSlash,
  FaTimes,
  FaArrowCircleRight,
  FaArrowCircleLeft,
  FaCheckCircle,
} from "react-icons/fa";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Card5 from "./Card5";
import Card6 from "./Card6";

const RegisterPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [nextStep, setNextStep] = useState(1); // To manage the step transitioning
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [toggleType, setToggleType] = useState("student"); // Toggle between login and register
  const [isType, setIsType] = useState(true);

  useEffect(() => {
    if (nextStep !== currentStep) {
      // Trigger exit animation for current step
      document.querySelector(`.modal-step.active`).classList.add("exiting");

      // Wait for the exit animation to finish before transitioning to the next step
      setTimeout(() => {
        setCurrentStep(nextStep);
        document
          .querySelector(`.modal-step.active`)
          .classList.remove("exiting");
      }, 500); // Duration should match the animation duration
    }
  }, [nextStep, currentStep]);

  const handleShowModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  };
  const handleCloseModal = () => setShowModal(false);

  const handleNextStep = () => {
    if (currentStep < 6) {
      setNextStep(currentStep + 1);
    } else {
      setShowModal(false);
      navigate("/home");
    }
  };

  const handleBackStep = () => {
    if (currentStep > 1) {
      setNextStep(currentStep - 1);
    }
  };

  const handleLoginRedirect = () => {
    navigate("/");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleType = () => {
    setToggleType((prev) => (prev === "student" ? "teacher" : "student"));
    setIsType(!isType);
  };

  return (
    <Container fluid className="login-page-container">
      <Row className="w-100">
        <Col xs={12} md={7} className="left-container">
          <img
            src={registerImage}
            alt="Register Asset"
            className="register-image"
          />
        </Col>
        <Col xs={12} md={5} className="right-container">
          <div className="login-form">
            <div>
              <h2 className="text-center mb-4 welcome-text">
                {t("login.welcome-text")}
              </h2>
            </div>
            <div className="login-buttons">
              <button className="login-btn2" onClick={handleLoginRedirect}>
                {t("login.login")}
              </button>
              <button className="register-btn2">{t("login.register")}</button>
            </div>
            <div className="pill-buttons">
              <button
                className={`pill-button ${isType ? "active" : ""}`}
                onClick={() => handleToggleType()}
              >
                Student
              </button>
              <button
                className={`pill-button ${!isType ? "active" : ""}`}
                onClick={() => handleToggleType()}
              >
                Teacher
              </button>
            </div>
            <div>
              <h2 className="welcome-description">{t("login.welcome")}</h2>
            </div>
            <div className="w-100">
              <Form>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>{t("login.email")}</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={t("login.enter-email")}
                    className="form-control-custom"
                  />
                </Form.Group>
                <Form.Label>{t("login.password")}</Form.Label>
                <Form.Group
                  className="mb-3 d-flex align-items-center position-relative"
                  controlId="formPassword"
                >
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    placeholder={t("login.enter-password")}
                    className="form-control-custom"
                  />
                  <span
                    className="position-absolute eye-icon"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </Form.Group>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Group
                  className="mb-3 d-flex align-items-center position-relative"
                  controlId="formPassword"
                >
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    className="form-control-custom"
                  />
                  <span
                    className="position-absolute eye-icon"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCourse">
                  <Form.Label>Assiged Course</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Course Name"
                    className="form-control-custom"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGrade">
                  <Form.Label>Grade Assigned</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Grade Assigned"
                    className="form-control-custom"
                  />
                </Form.Group>
                <div className="register-submit-btn-container">
                  <button
                    className="register-submit-btn"
                    onClick={handleShowModal}
                  >
                    {t("login.register")}
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        centered
        size="xl"
        className="big-modal"
      >
        <Modal.Body className="register-modal">
          <div className="close-button-container">
            <Button onClick={handleCloseModal} className="close-button">
              <FaTimes />
            </Button>
          </div>
          <div className={`modal-step ${currentStep === 1 ? "active" : ""}`}>
            {currentStep === 1 && <Card1 />}
          </div>
          <div className={`modal-step ${currentStep === 2 ? "active" : ""}`}>
            {currentStep === 2 && <Card2 />}
          </div>
          <div className={`modal-step ${currentStep === 3 ? "active" : ""}`}>
            {currentStep === 3 && <Card3 />}
          </div>{" "}
          <div className={`modal-step ${currentStep === 4 ? "active" : ""}`}>
            {currentStep === 4 && <Card4 handleNextStep={handleNextStep} />}
          </div>
          <div className={`modal-step ${currentStep === 5 ? "active" : ""}`}>
            {currentStep === 5 && <Card5 handleNextStep={handleNextStep} />}
          </div>
          <div className={`modal-step ${currentStep === 6 ? "active" : ""}`}>
            {currentStep === 6 && <Card6 handleNextStep={handleNextStep} />}
          </div>
          <div className="button-container">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {currentStep !== 1 ? (
                <Button onClick={handleBackStep} className="navigation-button">
                  <FaArrowCircleLeft
                    style={{ width: "40px", height: "40px" }}
                  />
                </Button>
              ) : (
                <div></div>
              )}

              {currentStep !== 6 ? (
                currentStep !== 4 && currentStep !== 5 ? (
                  <Button
                    onClick={handleNextStep}
                    className="navigation-button"
                  >
                    <FaArrowCircleRight
                      style={{ width: "40px", height: "40px" }}
                    />
                  </Button>
                ) : (
                  <div></div>
                )
              ) : (
                <Button onClick={handleNextStep} className="navigation-button">
                  <FaCheckCircle style={{ width: "40px", height: "40px" }} />
                </Button>
              )}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default RegisterPage;
