import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Navigation from './Navigation';
import Footer from './Footer';
import '../css/LearningPage.css';
import { MDBIcon, MDBContainer, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import PDFViewer from './PDFViewer'; // Import the PDFViewer component

// Sample content for the sections
const sections = {
  section1: 'Content for Section 1',
  section2: 'Content for Section 2',
  section3: 'Content for Section 3',
  section4: 'Content for Section 4',
  section5: 'Content for Section 5',
};

const LearningPage = () => {
  const [activeSection, setActiveSection] = useState('section1');
  const colorCycle = ['rgba(191, 70, 40, 0.48)', 'rgba(244, 140, 6, 0.3)', 'rgba(238, 100, 91, 0.3)'];
  const selectedColor = 'rgba(191, 70, 40, 1)';

  const handleButtonClick = (key) => {
    setActiveSection(key);
  };
  const pdfUrl = 'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf';

  return (
    <>
      <Navigation />
      <MDBContainer className="large-container">
        <MDBRow className="container-row">
          <MDBCol md={2} className="sidebar">
            <h3 className="sidebar-title">Math Grade 8</h3>
            {Object.keys(sections).map((key, index) => (
              <Button
                key={key}
                style={{
                  backgroundColor: activeSection === key ? selectedColor : colorCycle[index % colorCycle.length],
                  color: activeSection === key ? '#fff' : 'rgba(37, 38, 65, 1)', // Ensure text color contrasts well with background
                  border: 'none',
                  borderRadius: '10px',
                  marginBottom: '10px',
                  fontSize: '0.8rem', // Adjust font-size as needed
                  fontWeight: '600', // Adjust font-weight as needed
                  fontFamily: 'Poppins', // Adjust font-family as needed
                }}
                onClick={() => handleButtonClick(key)}
                className="w-100 text-left"
              >
                <div className="button-body">
                  <div>
                    <MDBIcon icon="book-open" style={{ padding: '0.5rem' }} />
                    {key.replace('section', 'Section ')}
                  </div>
                  <div>{'30 mins'}</div>
                </div>
              </Button>
            ))}
          </MDBCol>
          <MDBCol md={10} className="section-col">
            <MDBRow className="header-row2">
              <div className="header-title">
                <h2 className="header-title-text">{activeSection.replace('section', 'Section ')}</h2>
              </div>
              <div className="header-sub-title">
                <h4 className="header-sub-title-text">{activeSection.replace('section', 'Section ')}</h4>
                <p className="header-sub-title-text">
                  <MDBIcon far icon="clock" style={{ padding: '3px' }} /> 1 hour
                </p>
              </div>
            </MDBRow>
            <MDBRow className="content-row">
              <div className="content-body">
                <div style={{ padding: '30px', height: '30rem' }}>
                  <iframe
                    className="shadow-1-strong rounded"
                    src="https://www.youtube.com/embed/UCvAZ-JscdE"
                    title="YouTube video"
                    allowFullScreen
                    data-gtm-yt-inspected-2340190_699="true"
                    id="388567449"
                    style={{ width: '-webkit-fill-available', height: '-webkit-fill-available' }}
                  ></iframe>
                </div>
                <div className="content-body-text">
                  <h2 className="content-body-text-h2">Lesson PDF: </h2> <PDFViewer fileUrl={pdfUrl} /> {/* Add PDFViewer here */}
                </div>
                <div className="content-body-text">
                  <h2 className="content-body-text-h2">{activeSection.replace('section', 'Section ')}</h2>
                  <p className="content-body-text-p">
                    Lesson description: Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do
                    eiusmod
                  </p>
                  <h2 className="content-body-text-h2">{activeSection.replace('section', 'Section ')}</h2>
                  <p className="content-body-text-p">
                    Lesson description: Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do
                    eiusmod
                  </p>
                  <h2 className="content-body-text-h2">{activeSection.replace('section', 'Section ')}</h2>
                  <p className="content-body-text-p">
                    Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do
                    eiusmodLWho this course is for? Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do
                    eiusmodeiusmodadipiscing elit, sed do eiusmodL
                  </p>
                </div>
              </div>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Footer style={{ margin: '0px' }} />
    </>
  );
};

export default LearningPage;
