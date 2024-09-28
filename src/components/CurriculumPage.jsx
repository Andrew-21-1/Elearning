import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import FileUpload from './FileUpload';
import LessonData from './LessonData';
import LessonOrder from './LessonOrder';
import ClassroomSoftware from '../components2/ClassroomSoftware';
import Footer from './Footer';
import { useParams } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import '../css/CurriculumPage.css';

const CurriculumPage = () => {
  const [uploadedFileUrl, setUploadedFileUrl] = useState('');
  const [courses, setCourses] = useState(null);
  const [lessons, setLessons] = useState(null);
  const [loading, setLoading] = useState(true);
  const { token } = useAuth();
  let { course, grade } = useParams();
  const [activeButton, setActiveButton] = useState('course');
  const [file, setFile] = useState(null);

  const handleFileUpload = (url) => {
    setUploadedFileUrl(url);
  };

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
      if (data.data.courses.length === 0) {
        const payload = {
          courseName: `Introduction to ${course}`,
          courseDescription: 'This course Placeholder Description.',
          property: null,
          pdfLink: null,
          gradeLevel: grade,
          courseCategory: course.toUpperCase(),
        };

        response = await fetch(`${import.meta.env.VITE_HOST}/api/v1/courses/`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
        if (!response.ok) throw new Error('Failed to create course');
        data = await response.json();
      } else {
        data = data.data.courses[0]; // Get the first course
      }
      setCourses(data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
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
      setLessons(data.data.lessons); // Ensure it's an array
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
      };
      fetchData2();
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

  return (
    <>
      <Navigation />
      <FileUpload file={file} setFile={setFile} handleFileUpload={handleFileUpload} activeButton={activeButton} grade={grade} course={course} />
      <LessonData setFile={setFile} uploadedFileUrl={uploadedFileUrl} courses={courses} lessons={lessons} grade={grade} activeButton={activeButton} setActiveButton={setActiveButton} />
      <LessonOrder lessons={lessons} courses={courses} />
      <ClassroomSoftware style={{ marginTop: '10px', display: 'flex' }} />
      <Footer />
    </>
  );
};

export default CurriculumPage;
