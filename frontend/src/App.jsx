import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
// import LanguagePage from './pages/LanguagePage';
import PracticePage from './pages/PracticePage';
import DashboardPage from './pages/DashboardPage';
import RewardsPage from './pages/RewardsPage';
import CoursePage from './pages/CoursePage';
import FileUploadAdmin from './components/ContentUpload'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/language/:id" element={<LanguagePage />} /> */}
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