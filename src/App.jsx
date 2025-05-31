import app from './firebase';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <ScrollToTop />

      {/* 🔹 Background image container */}
      <div
        className="min-h-screen bg-fixed bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url('/bg.jpg')` }}
      >
        <div className="flex flex-col min-h-screen backdrop-brightness-95"> {/* Optional: dark overlay */}
          <Header />

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
             <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
