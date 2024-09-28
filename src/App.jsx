import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import HomePage from './components/HomePage';
import CurriculumPage from './components/CurriculumPage';
import LearningPage from './components/LearningPage';
import StudentPage from './components/StudentPage';
import ProfilePage from './components/ProfilePage';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/curriculum/:course/grade/:grade" element={<CurriculumPage />} />
          <Route path="/resources" element={<LearningPage />} />
          <Route path="/student" element={<StudentPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Router>
    </I18nextProvider>
  );
};

export default App;
