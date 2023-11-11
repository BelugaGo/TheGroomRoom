import './App.css';
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages';
import ContactPage from './Pages/ContactPage';
import BookPage from './Pages/BookPage';





function App() {
  return (
    <>
   <Router>
    <Routes>
     <Route path="/" element={<HomePage />} exact /> 
      <Route path="/contact" element={<ContactPage />} exact />
      <Route path="/book" element={<BookPage />} exact />
    </Routes>
  </Router>
    </>
  );
}

export default App;
