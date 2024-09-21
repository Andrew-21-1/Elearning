import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import CourseCards from "./CourseCards";
import LessonCards from "./LessonCards";
import CourseCardsRecommended from "./CourseCardsRecommended";
import CourseCardsChoice from "./CourseCardsChoice";

const StudentPage = () => {
  return (
    <>
      <Navigation />
      <CourseCards />
      <LessonCards />
      <CourseCardsRecommended />
      <CourseCardsChoice />
      <Footer />
    </>
  );
};

export default StudentPage;
