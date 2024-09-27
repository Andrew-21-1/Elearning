import React, { useState, useEffect } from 'react';
import { Button, Form, Container, Row, Col, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup'; // Add Yup for validation
import '../css/RegisterPage.css';
import registerImage from '../assets/images/register.png';
import { useTranslation } from 'react-i18next';
import { FaEye, FaEyeSlash, FaTimes, FaArrowCircleRight, FaArrowCircleLeft, FaCheckCircle } from 'react-icons/fa';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import Card4 from './Card4';
import Card5 from './Card5';
import Card6 from './Card6';
import Select from 'react-select';
import { useAuth } from '../AuthContext'; // Adjust the path accordingly

const RegisterPage = () => {
  const { login } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [nextStep, setNextStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [toggleType, setToggleType] = useState('student');
  const [isType, setIsType] = useState(true);
  const [error, setError] = useState('');

  // Sample options for the courses and grades
  const courseOptions = [
    { value: 'MATH', label: 'Math' },
    { value: 'ELA', label: 'Ela' },
    { value: 'SOCIAL_STUDIES', label: 'Social Studies' },
    { value: 'ELECTIVES', label: 'Electives' },
    { value: 'PHYSICAL_EDUCATION', label: 'Physical Education' },
    // Add more courses as needed
  ];

  const gradeOptions = [
    { value: 1, label: 'Grade 1' },
    { value: 2, label: 'Grade 2' },
    { value: 3, label: 'Grade 3' },
    { value: 4, label: 'Grade 4' },
    { value: 5, label: 'Grade 5' },
    { value: 6, label: 'Grade 6' },
    { value: 7, label: 'Grade 7' },
    { value: 8, label: 'Grade 8' },
    { value: 9, label: 'Grade 9' },
    { value: 10, label: 'Grade 10' },
    { value: 11, label: 'Grade 11' },
    { value: 12, label: 'Grade 12' },
    // Add more grades as needed
  ];
  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderColor: 'lightgray',
      '&:hover': {
        borderColor: 'gray',
      },
      borderRadius: '2.5rem',
      fontFamily: 'Poppins',
      padding: '0.2rem 1rem',
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: '#e0e0e0',
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: '#333',
      fontFamily: 'Poppins',
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      ':hover': {
        backgroundColor: 'red',
        color: 'white',
        fontFamily: 'Poppins',
      },
    }),
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      coursesAssigned: [],
      gradesAssigned: [],
      firstName: '',
      lastName: '',
      phoneNumber: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().min(6, 'Must be at least 6 characters').required('Required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required'),
      coursesAssigned: isType ? Yup.array() : Yup.array().min(1).required('Required'),
      gradesAssigned: isType ? Yup.mixed().required('Required') : Yup.array().min(1).required('Required'),
      firstName: Yup.string().required('Required'),
      lastName: Yup.string().required('Required'),
      phoneNumber: Yup.string().required('Required'), // Add appropriate validation if needed
    }),
    onSubmit: async (values) => {
      // Call your API registration logic here
      try {
        const fullName = `${values.firstName} ${values.lastName}`;

        let payload = {
          ...values,
          fullName: fullName, // Include fullName in the payload for your backend
          role: isType ? 'STUDENT' : 'TEACHER',
        };
        if (isType) {
          payload = {
            ...payload,
            gradeLevel: payload.gradesAssigned.value,
            gradesAssigned: [],
          };
        } else {
          payload = {
            ...payload,
            coursesAssigned: payload.coursesAssigned.map((course) => course.value),
            gradesAssigned: payload.gradesAssigned.map((grade) => grade.value),
          };
        }
        console.log(payload);
        const response = await fetch(`${import.meta.env.VITE_HOST}/api/v1/users/signup`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
          const data = await response.json();
          console.log('Login successful:', data);
          login(data.data.token, data.data.user);
          navigate('/'); // Redirect to homepage or dashboard
        } else {
          const data = await response.json();
          setError(data.message);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    },
  });

  useEffect(() => {
    if (nextStep !== currentStep) {
      document.querySelector(`.modal-step.active`).classList.add('exiting');

      setTimeout(() => {
        setCurrentStep(nextStep);
        document.querySelector(`.modal-step.active`).classList.remove('exiting');
      }, 500);
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
      // Submit the form when on the last step
      formik.handleSubmit();
      setShowModal(false);
    }
  };

  const handleBackStep = () => {
    if (currentStep > 1) {
      setNextStep(currentStep - 1);
    }
  };

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleType = () => {
    setToggleType((prev) => (prev === 'student' ? 'teacher' : 'student'));
    setIsType(!isType);
  };

  return (
    <Container fluid className="register-page-container">
      <Row className="w-100">
        <Col xs={12} md={7} className="left-container">
          <img src={registerImage} alt="Register Asset" className="register-image" />
        </Col>
        <Col xs={12} md={5} className="right-container">
          <div className="login-form">
            <h2 className="text-center mb-4 welcome-text">{t('login.welcome-text')}</h2>
            <div className="login-buttons">
              <button className="login-btn2" onClick={handleLoginRedirect}>
                {t('login.login')}
              </button>
              <button className="register-btn2">{t('login.register')}</button>
            </div>
            <div className="pill-buttons">
              <button className={`pill-button ${isType ? 'active' : ''}`} onClick={handleToggleType}>
                Student
              </button>
              <button className={`pill-button ${!isType ? 'active' : ''}`} onClick={handleToggleType}>
                Teacher
              </button>
            </div>
            <h2 className="welcome-description">{t('login.welcome')}</h2>
            <Form onSubmit={formik.handleSubmit} style={{ width: '-webkit-fill-available' }}>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>{t('login.email')}</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={t('login.enter-email')}
                  className="form-control-custom"
                  {...formik.getFieldProps('email')}
                  isInvalid={!!formik.errors.email && formik.touched.email}
                />
                <Form.Control.Feedback type="invalid">{formik.errors.email}</Form.Control.Feedback>
              </Form.Group>
              <Row className="mb-3">
                <Col sm={6}>
                  <Form.Group controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter First Name"
                      className="form-control-custom"
                      {...formik.getFieldProps('firstName')}
                      isInvalid={!!formik.errors.firstName && formik.touched.firstName}
                    />
                    <Form.Control.Feedback type="invalid">{formik.errors.firstName}</Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col sm={6}>
                  <Form.Group controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Last Name"
                      className="form-control-custom"
                      {...formik.getFieldProps('lastName')}
                      isInvalid={!!formik.errors.lastName && formik.touched.lastName}
                    />
                    <Form.Control.Feedback type="invalid">{formik.errors.lastName}</Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3" controlId="formPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Phone Number"
                  className="form-control-custom"
                  {...formik.getFieldProps('phoneNumber')}
                  isInvalid={!!formik.errors.phoneNumber && formik.touched.phoneNumber}
                />
                <Form.Control.Feedback type="invalid">{formik.errors.phoneNumber}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3 position-relative" controlId="formPassword">
                <Form.Label>{t('login.password')}</Form.Label>
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  placeholder={t('login.enter-password')}
                  className="form-control-custom"
                  {...formik.getFieldProps('password')}
                  isInvalid={!!formik.errors.password && formik.touched.password}
                />
                <span className="eye-icon" onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
                <Form.Control.Feedback type="invalid">{formik.errors.password}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3 position-relative" controlId="formConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Confirm Password"
                  className="form-control-custom"
                  {...formik.getFieldProps('confirmPassword')}
                  isInvalid={!!formik.errors.confirmPassword && formik.touched.confirmPassword}
                />
                <span className="eye-icon" onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                  <Form.Control.Feedback type="invalid">{formik.errors.confirmPassword}</Form.Control.Feedback>
                </span>
              </Form.Group>
              {!isType ? (
                <Form.Group className="mb-3" controlId="formCoursesAssigned">
                  <Form.Label>Assigned Course</Form.Label>
                  <Select
                    isMulti
                    options={courseOptions}
                    classNamePrefix="select"
                    styles={customStyles} // Apply custom styles here
                    onChange={(selectedOptions) => {
                      formik.setFieldValue('coursesAssigned', selectedOptions);
                    }}
                    onBlur={() => formik.setFieldTouched('coursesAssigned', true)}
                    className={formik.touched.coursesAssigned && formik.errors.coursesAssigned ? 'is-invalid' : ''}
                  />
                  {formik.touched.coursesAssigned && formik.errors.coursesAssigned && (
                    <div className="invalid-feedback" style={{ display: 'block' }}>
                      {formik.errors.coursesAssigned}
                    </div>
                  )}
                </Form.Group>
              ) : null}{' '}
              <Form.Group className="mb-3" controlId="formGradesAssigned">
                <Form.Label>Grade Assigned</Form.Label>
                <Select
                  isMulti={!isType}
                  options={gradeOptions}
                  classNamePrefix="select"
                  styles={customStyles} // Apply custom styles here
                  menuPlacement="top" // This makes the dropdown appear above the input
                  onChange={(selectedOptions) => {
                    formik.setFieldValue('gradesAssigned', selectedOptions);
                  }}
                  onBlur={() => formik.setFieldTouched('grade', true)}
                  className={formik.touched.gradesAssigned && formik.errors.gradesAssigned ? 'is-invalid' : ''}
                />
                {formik.touched.gradesAssigned && formik.errors.gradesAssigned && (
                  <div className="invalid-feedback" style={{ display: 'block' }}>
                    {formik.errors.gradesAssigned}
                  </div>
                )}
              </Form.Group>
              {error && <p style={{ color: 'white' }}>{error}</p>}
              <div className="register-submit-btn-container">
                <button className="register-submit-btn" onClick={handleShowModal}>
                  {t('login.register')}
                </button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
      <Modal show={showModal} onHide={handleCloseModal} centered size="xl" className="big-modal">
        <Modal.Body className="register-modal">
          <div className="close-button-container">
            <Button onClick={handleCloseModal} className="close-button">
              <FaTimes />
            </Button>
          </div>
          <div className={`modal-step ${currentStep === 1 ? 'active' : ''}`}>{currentStep === 1 && <Card1 />}</div>
          <div className={`modal-step ${currentStep === 2 ? 'active' : ''}`}>{currentStep === 2 && <Card2 />}</div>
          <div className={`modal-step ${currentStep === 3 ? 'active' : ''}`}>{currentStep === 3 && <Card3 />}</div>
          <div className={`modal-step ${currentStep === 4 ? 'active' : ''}`}>{currentStep === 4 && <Card4 handleNextStep={handleNextStep} />}</div>
          <div className={`modal-step ${currentStep === 5 ? 'active' : ''}`}>{currentStep === 5 && <Card5 handleNextStep={handleNextStep} />}</div>
          <div className={`modal-step ${currentStep === 6 ? 'active' : ''}`}>{currentStep === 6 && <Card6 handleNextStep={handleNextStep} />}</div>
          <div className="button-container">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              {currentStep !== 1 && (
                <Button onClick={handleBackStep} className="navigation-button">
                  <FaArrowCircleLeft style={{ width: '40px', height: '40px' }} />
                </Button>
              )}
              {currentStep !== 6 ? (
                <Button onClick={handleNextStep} className="navigation-button">
                  {currentStep === 4 || currentStep === 5 ? null : <FaArrowCircleRight style={{ width: '40px', height: '40px' }} />}
                </Button>
              ) : (
                <Button onClick={handleNextStep} className="navigation-button">
                  <FaCheckCircle style={{ width: '40px', height: '40px' }} />
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
