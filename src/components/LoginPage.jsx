import React, { useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../css/LoginPage.css';
import loginImage from '../assets/images/LoginImage.png';
import { useTranslation } from 'react-i18next';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleRegisterRedirect = () => {
    navigate('/register');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${import.meta.env.VITE_HOST}/api/v1/users/login`, {
        // Replace with your backend URL
        headers: {
          'Content-Type': 'application/json',
          Accept: '*/*',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed. Please check your credentials.');
      }

      const data = await response.json();
      // Handle successful login, e.g., store token, redirect
      console.log('Login successful:', data);
      login(data.token);
      navigate('/'); // Redirect to homepage or dashboard
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container fluid className="login-page-container">
      <Row className="w-100">
        <Col xs={12} md={7} className="left-container">
          <img src={loginImage} alt="Login Asset" className="login-image" style={{ height: '100%' }} />
          <Row>
            <h5 className="login-title">{t('login.learn-online')}</h5>
            <p className="login-subtitle">{t('login.welcome-subtitle')}</p>
          </Row>
        </Col>
        <Col xs={12} md={5} className="right-container">
          <div className="login-form">
            <div>
              <h2 className="text-center mb-4 welcome-text">{t('login.welcome-text')}</h2>
              {error && <p className="text-danger">{error}</p>}
            </div>
            <div className="login-buttons">
              <button className="login-btn">{t('login.login')}</button>
              <button className="register-btn" onClick={handleRegisterRedirect}>
                {t('login.register')}
              </button>
            </div>
            <div>
              <h2 className="welcome-description">{t('login.welcome')}</h2>
            </div>
            <div className="w-100">
              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter Email address" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control-custom" />
                </Form.Group>

                <Form.Label>{t('login.password')}</Form.Label>
                <Form.Group className="mb-3 d-flex align-items-center position-relative" controlId="formPassword">
                  <Form.Control
                    type={showPassword ? 'text' : 'password'}
                    placeholder={t('login.enter-password')}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                  <button className="login-submit-btn" type="submit">
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
