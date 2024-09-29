import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Navigation from './Navigation';
import Footer from './Footer';
import '../css/LearningPage.css';
import { MDBIcon, MDBContainer, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import PDFViewer from './PDFViewer'; // Import the PDFViewer component
import { useParams } from 'react-router-dom';
import { useAuth } from '../AuthContext';

// Sample content for the sections

const LearningPage = () => {
  const [activeSection, setActiveSection] = useState({});
  const [activeIndex, setActiveIndexSection] = useState(0);
  const colorCycle = ['rgba(191, 70, 40, 0.48)', 'rgba(244, 140, 6, 0.3)', 'rgba(238, 100, 91, 0.3)'];
  const selectedColor = 'rgba(191, 70, 40, 1)';
  const [courses, setCourses] = useState(null);
  const [lessons, setLessons] = useState(null);
  const [loading, setLoading] = useState(true);
  const { token } = useAuth();
  let { course, grade } = useParams();

  const fetchCourses = async () => {
    try {
      let response = await fetch(`${import.meta.env.VITE_HOST}/api/v1/courses/?courseCategory=${course.toUpperCase()}&gradeLevel=${grade}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) throw new Error('Failed to fetch courses');

      let data = await response.json();
      setCourses(data.data.courses[0]);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const getVideoId = (url) => {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^&\n]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const fetchLessons = async () => {
    setLoading(true); // Start loading for lessons
    try {
      const response = await fetch(`${import.meta.env.VITE_HOST}/api/v1/lessons/?courseId=${courses._id}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) throw new Error('Failed to fetch lessons');
      const data = await response.json();
      setLessons(data.data); // Ensure it's an array
      if (data.data.length > 0) {
        setActiveSection(data.data[0]);
      }
    } catch (error) {
      console.error('Error fetching lessons:', error);
    } finally {
      setLoading(false); // Stop loading for lessons
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loading for courses
      await fetchCourses();
    };
    fetchData();
  }, [course, grade, token]);

  useEffect(() => {
    if (courses && courses._id) {
      const fetchData2 = async () => {
        setLoading(true); // Start loading for courses
        await fetchLessons();
        setLoading(false);
      };
      fetchData2();
      console.log(lessons);
    }
  }, [courses, token]);

  // Loading Spinner Component
  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <span className="loading-text">Loading...</span>
      </div>
    );
  }

  const handleButtonClick = (key) => {
    setActiveSection(lessons[key]);
    setActiveIndexSection(key);
  };

  return (
    <>
      <Navigation />
      <MDBContainer className={`large-container ${lessons.length === 0 ? 'full-height' : ''}`}>
        <MDBRow className={`container-row ${lessons.length === 0 ? 'full-height' : ''}`}>
          <MDBCol md={3} className="sidebar">
            <h3 className="sidebar-title">
              {course
                .replace(/_/g, ' ')
                .toLowerCase()
                .replace(/\b\w/g, (char) => char.toUpperCase())}{' '}
              Grade {grade}
            </h3>
            {lessons.length !== 0 ? (
              lessons.map((lesson, index) => (
                <Button
                  key={index} // Use a unique identifier for the key
                  style={{
                    backgroundColor: activeIndex === index ? selectedColor : colorCycle[index % colorCycle.length],
                    color: activeIndex === index ? '#fff' : 'rgba(37, 38, 65, 1)',
                    border: 'none',
                    borderRadius: '10px',
                    marginBottom: '10px',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    fontFamily: 'Poppins',
                  }}
                  onClick={() => handleButtonClick(index)}
                  className="w-100 text-left"
                >
                  <div className="button-body">
                    <div>
                      <MDBIcon icon="book-open" style={{ padding: '0.5rem' }} />
                      {lesson.lessonTitle}
                    </div>
                    <div>{`${lesson.lessonDuration} mins`}</div>
                  </div>
                </Button>
              ))
            ) : (
              <div>No Lessons Yet</div>
            )}
          </MDBCol>
          <MDBCol md={9} className="section-col">
            {lessons.length != 0 ? (
              <>
                <MDBRow className="header-row2">
                  <div className="header-title">
                    <h2 className="header-title-text">{courses.courseName}</h2>
                  </div>
                  {lessons.length > 0 ? (
                    <div className="header-sub-title">
                      <h4 className="header-sub-title-text">{activeSection.lessonTitle}</h4>
                      <p className="header-sub-title-text">
                        <MDBIcon far icon="clock" style={{ padding: '3px' }} /> {activeSection.lessonDuration} mins
                      </p>
                    </div>
                  ) : null}
                </MDBRow>
                <MDBRow className="content-row">
                  <div className="content-body">
                    {activeSection.youtubeLink && (
                      <div style={{ padding: '30px', height: '30rem' }}>
                        <iframe
                          className="shadow-1-strong rounded"
                          src={`https://www.youtube.com/embed/${getVideoId(activeSection.youtubeLink)}`}
                          title="YouTube video"
                          allowFullScreen
                          style={{ width: '100%', height: '100%' }}
                        />
                      </div>
                    )}
                    {activeSection.pdfLink && (
                      <div className="content-body-text">
                        <h2 className="content-body-text-h2">Lesson PDF: </h2>
                        <PDFViewer fileUrl={activeSection.pdfLink} />
                      </div>
                    )}
                    <div className="content-body-text">
                      <h2 className="content-body-text-h2">Lesson Overview:</h2>
                      <p className="content-body-text-p">{activeSection.description}</p>
                    </div>
                  </div>
                </MDBRow>
              </>
            ) : (
              <>
                <MDBRow className="header-row2">
                  <div className="header-title">
                    <h2 className="header-title-text">{courses.courseName}</h2>
                  </div>
                  <div className="header-sub-title">
                    <h4 className="header-sub-title-text">{activeSection.lessonTitle}</h4>
                    <p className="header-sub-title-text">
                      <MDBIcon far icon="clock" style={{ padding: '3px' }} /> {activeSection.lessonDuration} mins
                    </p>
                  </div>
                </MDBRow>
                <MDBRow className="content-row" style={{ height: '100%' }}>
                  <div className="content-body">
                    <div className="no-lessons-message">No Lessons Uploaded yet please check back later.</div>
                  </div>
                </MDBRow>
              </>
            )}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Footer style={{ margin: '0px' }} />
    </>
  );
};

export default LearningPage;
