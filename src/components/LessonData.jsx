import React, { useState } from 'react';
import '../css/LessonData.css';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBTextArea, MDBInput } from 'mdb-react-ui-kit';

function LessonData({ uploadedFileUrl }) {
  // State to track which button is active (either 'course' or 'lesson')
  const [activeButton, setActiveButton] = useState('course');

  // Function to toggle between 'course' and 'lesson'
  const handleButtonClick = (button) => {
    // If the button clicked is the same as activeButton, do nothing
    if (activeButton !== button) {
      setActiveButton(button);
    } else {
      if (button === 'course') {
        setActiveButton('lesson');
      } else {
        setActiveButton('course');
      }
    }
  };
  const handleSaveCourse = (button) => {
    button.preventDefault();
    console.log(uploadedFileUrl);
    document.getElementById('saved_course').style.display = 'block';
  };
  const handleSaveLesson = (button) => {
    button.preventDefault();
    console.log(uploadedFileUrl);
    document.getElementById('saved_lesson').style.display = 'block';
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
                <form style={{ width: '100%' }}>
                  <MDBCol style={{ width: '50%' }}>
                    <MDBInput id="course_name" wrapperClass="mb-4" label="Course Name" />
                  </MDBCol>
                  <MDBTextArea type="text" textarea id="course_description" wrapperClass="mb-8" label="Course Description" />
                </form>
              ) : (
                <form style={{ width: '100%' }}>
                  <MDBCol style={{ width: '50%' }}>
                    <MDBInput id="lesson_name" wrapperClass="mb-4" label="Lesson Name" />
                  </MDBCol>

                  <MDBTextArea type="description" textarea id="lesson_description" wrapperClass="mb-4" rows={4} label="Course Description" style={{ width: '100%' }} />
                  <MDBCol style={{ width: '50%' }}>
                    <MDBInput type="number" id="lesson_duration" wrapperClass="mb-4" label="Course Duration (min)" />
                  </MDBCol>
                </form>
              )}
            </MDBContainer>
          </MDBCol>
          <MDBCol size="md-4" className="lesson-data-col2">
            {/* Conditionally render content based on active button */}
            {activeButton === 'course' ? (
              <div>
                <h2 className="lesson-data-save" id="saved_course">
                  Course saved!
                </h2>

                <button className="lesson-save-btn" onClick={handleSaveCourse} type="button">
                  Save Course
                </button>
                <hr class="rounded"></hr>
                <h1 className="lesson-data-title">This Course details:</h1>
                <p className="lesson-data-description">Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                <hr class="rounded"></hr>
                <h1 className="lesson-data-title">Grade 8:</h1>
                <p className="lesson-data-description">Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                <hr class="rounded"></hr>
              </div>
            ) : (
              <div>
                <h2 className="lesson-data-save" id="saved_lesson">
                  Lesson saved!
                </h2>
                <button className="lesson-save-btn" onClick={handleSaveLesson} type="button">
                  Save Lesson
                </button>
                <hr class="rounded"></hr>
                <h1 className="lesson-data-title">This Course details:</h1>
                <p className="lesson-data-description">Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                <hr class="rounded"></hr>
                <h1 className="lesson-data-title">Grade 8:</h1>
                <p className="lesson-data-description">Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                <hr class="rounded"></hr>
              </div>
            )}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}

export default LessonData;
