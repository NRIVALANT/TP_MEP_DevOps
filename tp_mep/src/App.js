import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import Favorites from './pages/Favorites';
import Contact from './pages/contact.js';
// import Folder from './pages/Folder';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/favorites" element={<Favorites />} /> */}
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/folder" element={<Folder />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
