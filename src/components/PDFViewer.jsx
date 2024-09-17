import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import '../css/PDFViewer.css';
import { MDBIcon } from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';

// Set the worker source for PDF.js
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).toString();

const PDFViewer = ({ fileUrl }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [zoom, setZoom] = useState(2.0); // Default zoom level

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPreviousPage = () => {
    setPageNumber((prevPage) => Math.max(prevPage - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber((prevPage) => Math.min(prevPage + 1, numPages));
  };

  const toggleFullScreen = () => {
    setIsFullScreen((prevState) => !prevState);
  };

  const zoomIn = () => {
    setZoom((prevZoom) => Math.min(prevZoom + 0.2, 3.0)); // Max zoom level of 3.0
  };

  const zoomOut = () => {
    setZoom((prevZoom) => Math.max(prevZoom - 0.2, 0.5)); // Min zoom level of 0.5
  };

  return (
    <div className={`pdf-viewer-container ${isFullScreen ? 'full-screen' : ''}`}>
      <div className="pdf-navigation">
        <Button className="pdf-navigation-button" onClick={toggleFullScreen}>
          {' '}
          View PDF
        </Button>
      </div>

      {isFullScreen && (
        <div className="full-screen-overlay">
          <div className={`pdf-content ${isFullScreen ? 'overlay' : ''}`}>
            <Document file={fileUrl} onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={pageNumber} scale={zoom} />
            </Document>
          </div>
          <div className="overlay-controls">
            <div>
              <Button className="pdf-navigation-button" onClick={zoomOut} disabled={zoom <= 0.5}>
                <MDBIcon fas icon="search-minus" />{' '}
              </Button>
              <Button className="pdf-navigation-button" onClick={zoomIn} disabled={zoom >= 3.0}>
                <MDBIcon fas icon="search-plus" />{' '}
              </Button>
            </div>
            <div style={{ display: 'flex' }}>
              <Button className="pdf-navigation-button" onClick={goToPreviousPage} disabled={pageNumber === 1}>
                <MDBIcon fas icon="angle-left" />
              </Button>
              <p style={{ color: '#fff' }}>
                Page {pageNumber} of {numPages}
              </p>
              <Button className="pdf-navigation-button" onClick={goToNextPage} disabled={pageNumber === numPages}>
                <MDBIcon fas icon="angle-right" />{' '}
              </Button>
            </div>

            <Button className="pdf-navigation-button" onClick={toggleFullScreen}>
              Exit
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PDFViewer;
