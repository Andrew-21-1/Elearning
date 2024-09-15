import React from "react";
import NavigationOther from "./NavigationOther";
import FileUpload from "./FileUpload";
import LessonData from "./LessonData";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <>
      <NavigationOther />
      <FileUpload />
      <LessonData />
      <FileUpload />
      <Footer />
    </>
  );
};

export default HomePage;
