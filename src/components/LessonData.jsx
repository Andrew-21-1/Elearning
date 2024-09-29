import React from 'react';
import { useFormik } from 'formik';
import '../css/LessonData.css';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBTextArea, MDBInput } from 'mdb-react-ui-kit';
import { Form } from 'react-bootstrap';
import { useAuth } from '../AuthContext'; // Adjust the path accordingly
import Select from 'react-select';

function LessonData({ courses, lessons, setFile, uploadedFileUrl, grade, activeButton, setActiveButton }) {
  const { token } = useAuth();

  const typeOptions = [
    { value: 'Design', label: 'Design' },
    { value: 'Development', label: 'Development' },
    { value: 'Photography', label: 'Photography' },
    { value: 'Acting', label: 'Acting' },
    { value: 'Business', label: 'Business' },
    { value: 'Marketing', label: 'Marketing' },

    // Add more grades as needed
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderColor: '#bdbdbd',
      '&:hover': {
        borderColor: '#bdbdbd',
      },
      fontFamily: 'Poppins',
      backgroundColor: 'transparent',
      color: 'black',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#4f4f4f',
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#4f4f4f',
    }),
  };
  const formikCourse = useFormik({
    onSubmit: async (values) => {
      try {
        if (uploadedFileUrl) {
          values = {
            ...values,
            pdfLink: uploadedFileUrl,
          };
        }
        const response = await fetch(`${import.meta.env.VITE_HOST}/api/v1/courses/${courses._id}`, {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${token}`, // Replace with your token
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
        if (!response.ok) throw new Error('Failed to update course');
        document.getElementById('saved_course').style.display = 'block';
        window.location.reload();
      } catch (error) {
        console.error('Error updating course:', error);
      }
    },
    initialValues: {
      courseName: courses.courseName,
      courseDescription: courses.courseDescription,
    },
  });

  const formikLesson = useFormik({
    initialValues: {
      lessonTitle: '',
      description: '',
      lessonDuration: '',
      type: '',
      youtubeLink: '',
    },
    onSubmit: async (values) => {
      try {
        if (uploadedFileUrl) {
          values = {
            ...values,
            pdfLink: uploadedFileUrl,
            courseId: courses._id,
            type: values.type.value,
          };
        } else {
          values = {
            ...values,
            courseId: courses._id,
            type: values.type.value,
          };
        }

        console.log(token);
        const response = await fetch(`${import.meta.env.VITE_HOST}/api/v1/lessons/`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`, // Replace with your token
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
        const data = await response.json();
        console.log(data);
        if (!response.ok) throw new Error('Failed to update lesson');
        document.getElementById('saved_lesson').style.display = 'block';
        window.location.reload();
      } catch (error) {
        console.error('Error updating lesson:', error);
      }
    },
  });

  const handleButtonClick = (button) => {
    if (activeButton !== button) {
      setActiveButton(button);
      setFile(null);
    } else {
      setActiveButton(button === 'course' ? 'lesson' : 'course');
    }
  };

  return (
    <section className="lesson-data">
      <MDBContainer>
        <MDBRow className="lesson-data-row2">
          <MDBCol className="lesson-data-col">
            <div className="lesson-data-row">
              <div>
                <button className={`lesson-data-btn ${activeButton === 'course' ? 'active' : 'inactive'}`} onClick={() => handleButtonClick('course')}>
                  Course
                </button>
              </div>
              <div>
                <button className={`lesson-data-btn ${activeButton === 'lesson' ? 'active' : 'inactive'}`} onClick={() => handleButtonClick('lesson')}>
                  Lesson
                </button>
              </div>
            </div>
            <MDBContainer className="lesson-data-content">
              {activeButton === 'course' ? (
                <form style={{ width: '100%' }} onSubmit={formikCourse.handleSubmit}>
                  <MDBCol style={{ width: '50%' }}>
                    <MDBInput id="courseName" wrapperClass="mb-4" label="Course Name" value={formikCourse.values.courseName} onChange={formikCourse.handleChange} />
                  </MDBCol>
                  <MDBTextArea id="courseDescription" wrapperClass="mb-8" label="Course Description" value={formikCourse.values.courseDescription} onChange={formikCourse.handleChange} />
                </form>
              ) : (
                <Form style={{ width: '100%' }} onSubmit={formikLesson.handleSubmit}>
                  <MDBCol style={{ width: '50%' }}>
                    <MDBInput id="lessonTitle" wrapperClass="mb-4" label="Lesson Title" value={formikLesson.values.lessonTitle} onChange={formikLesson.handleChange} />
                  </MDBCol>
                  <MDBCol style={{ width: '100%' }}>
                    <MDBInput id="youtubeLink" wrapperClass="mb-4" label="Youtube Lesson Link" value={formikLesson.values.youtubeLink} onChange={formikLesson.handleChange} />
                  </MDBCol>
                  <MDBTextArea id="description" wrapperClass="mb-4" label="Lesson Description" value={formikLesson.values.description} onChange={formikLesson.handleChange} />
                  <MDBCol style={{ width: '50%' }}>
                    <MDBInput type="number" id="lessonDuration" wrapperClass="mb-4" label="Lesson Duration (min)" value={formikLesson.values.lessonDuration} onChange={formikLesson.handleChange} />
                  </MDBCol>
                  <MDBCol style={{ width: '50%' }}>
                    <Select
                      options={typeOptions}
                      classNamePrefix="select"
                      placeholder="Select Lesson Type"
                      menuPlacement="bottom" // This makes the dropdown appear above the input
                      onChange={(selectedOptions) => {
                        formikLesson.setFieldValue('type', selectedOptions);
                      }}
                      styles={customStyles} // Apply custom styles here
                    />
                  </MDBCol>
                </Form>
              )}
            </MDBContainer>
          </MDBCol>
          <MDBCol size="md-4" className="lesson-data-col2">
            {activeButton === 'course' ? (
              <div>
                <h2 className="lesson-data-save" id="saved_course" style={{ display: 'none' }}>
                  Course saved!
                </h2>
                <MDBBtn type="submit" className="lesson-save-btn" onClick={formikCourse.handleSubmit}>
                  Save Course
                </MDBBtn>
                <hr className="rounded" />
                <h1 className="lesson-data-title">{courses.courseName}</h1>
                <p className="lesson-data-description">{courses.courseDescription}</p>
                <hr className="rounded" />
                <h1 className="lesson-data-title">Grade {grade}:</h1>
                <p className="lesson-data-description">Class, launched less than a year ago...</p>
              </div>
            ) : (
              <div>
                <h2 className="lesson-data-save" id="saved_lesson" style={{ display: 'none' }}>
                  Lesson saved!
                </h2>
                <MDBBtn type="submit" className="lesson-save-btn" onClick={formikLesson.handleSubmit}>
                  Save Lesson
                </MDBBtn>
                <hr className="rounded" />
                <h1 className="lesson-data-title">This Lesson details:</h1>
                <p className="lesson-data-description">Class, launched less than a year ago...</p>
                <hr className="rounded" />
                <h1 className="lesson-data-title">Grade {grade}:</h1>
                <p className="lesson-data-description">Class, launched less than a year ago...</p>
              </div>
            )}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}

export default LessonData;
