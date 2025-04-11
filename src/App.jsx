import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Home from '../src/components/pages/Home';
import LanguagePage from '../src/components/pages/LanguagePage';
import PracticePage from '../src/components/pages/PracticePage';
import DashboardPage from '../src/components/pages/DashboardPage';
import RewardsPage from '../src/components/pages/RewardsPage';
import CoursePage from './components/pages/CoursePage';
import FileUploadAdmin from './components/ContentUpload'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/language/:id" element={<LanguagePage />} />
        <Route path="/practice/:id" element={<PracticePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/rewards" element={<RewardsPage />} />
        <Route path="/course/:courseId" element={<CoursePage />} />
        <Route path="/content" element={<FileUploadAdmin />} />
        
      </Routes>
    </Router>
  );
}

export default App;