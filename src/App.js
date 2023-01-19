import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './component/Calculator';
import Home from './component/Home';
import Navigation from './component/Navigation';
import Quote from './component/Quote';

export default function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Calculator" element={<Calculator />} />
          <Route path="/Quote" element={<Quote />} />
        </Routes>
      </Router>
    </>
  );
}
