import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import ProfileBanner from "./ProfileBanner";
import ProfileFooter from "./ProfileFooter";
import RecommendedCourses from "./CourseCardsRecommended";
import AcademicCalendar from "./AcademicCalendar";

const StudentPage = () => {
  return (
    <>
      <Navigation />
      <ProfileBanner />
      <AcademicCalendar />
      <RecommendedCourses />
      <ProfileFooter />
      <Footer />
    </>
  );
};

export default StudentPage;
