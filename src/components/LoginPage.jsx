import React, { useState } from 'react'; // Import useState here
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../css/LoginPage.css';
import loginImage from '../assets/images/LoginImage.png'; // Replace with your asset path
import { useTranslation } from 'react-i18next';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importing eye icons

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [toggleType, setToggleType] = useState('student'); // Toggle between login and register
  const [isType, setIsType] = useState(true);

  const handleRegisterRedirect = () => {
    navigate('/register');
  };

  const handleLoginRedirect = () => {
    navigate('/');
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleToggleType = () => {
    setToggleType((prev) => (prev === 'student' ? 'teacher' : 'student'));
    setIsType(!isType);
  };
  return (
    <Container fluid className="login-page-container">
      <Row className="w-100">
        {/* Left Container with Asset */}
        <Col xs={12} md={7} className="left-container">
          <img src={loginImage} alt="Login Asset" className="login-image" style={{ height: '100%' }} />
          <Row>
            <h5 className="login-title">{t('login.learn-online')}</h5>
            <p className="login-subtitle">{t('login.welcome-subtitle')}</p>
          </Row>
        </Col>
        {/* Right Container with Form */}
        <Col xs={12} md={5} className="right-container">
          <div className="login-form">
            <div>
              <h2 className="text-center mb-4 welcome-text">{t('login.welcome-text')}</h2>
            </div>
            <div className="login-buttons">
              <button className="login-btn">{t('login.login')}</button>
              <button className="register-btn" onClick={handleRegisterRedirect}>
                {t('login.register')}
              </button>
            </div>
            <div className="pill-buttons">
              <button className={`pill-button ${isType ? 'active' : ''}`} onClick={() => handleToggleType()}>
                Student
              </button>
              <button className={`pill-button ${!isType ? 'active' : ''}`} onClick={() => handleToggleType()}>
                Teacher
              </button>
            </div>
            <div>
              <h2 className="welcome-description">{t('login.welcome')}</h2>
            </div>
            <div className="w-100">
              <Form>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="text" placeholder="Enter Email address" className="form-control-custom" />
                </Form.Group>

                <Form.Label>{t('login.password')}</Form.Label>
                <Form.Group className="mb-3 d-flex align-items-center position-relative" controlId="formPassword">
                  <Form.Control
                    type={showPassword ? 'text' : 'password'} // Toggling between text and password
                    placeholder={t('login.enter-password')}
                    className="form-control-custom"
                  />
                  <span className="position-absolute eye-icon" onClick={togglePasswordVisibility}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </Form.Group>

                <div className="form-footer">
                  <div className="remember-me">
                    <Form.Check />
                    <Form.Label>{t('login.remember-me')}</Form.Label>
                  </div>
                  <Button className="forget" variant="link">
                    {t('login.forgot-password')}
                  </Button>
                </div>
                <div className="login-submit-btn-container">
                  <button className="login-submit-btn" onClick={handleLoginRedirect}>
                    {t('login.login')}
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
