import React, { useState } from 'react';
import Navigation from './Navigation';
import FileUpload from './FileUpload';
import LessonData from './LessonData';
import LessonOrder from './LessonOrder';
import ClassroomSoftware from '../components2/ClassroomSoftware';
import Footer from './Footer';

const HomePage = () => {
  const [uploadedFileUrl, setUploadedFileUrl] = useState('');

  const handleFileUpload = (url) => {
    setUploadedFileUrl(url);
  };
  return (
    <>
      <Navigation />
      <FileUpload handleFileUpload={handleFileUpload} />
      <LessonData uploadedFileUrl={uploadedFileUrl} />
      <LessonOrder />
      <ClassroomSoftware style={{ marginTop: '10px', display: 'flex' }} />
      <Footer />
    </>
  );
};

export default HomePage;
