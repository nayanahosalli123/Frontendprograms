import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Card1 from './Card1';
function Home() {
  return (
  <div classname='cards'>
    <Card1/>
    </div>
  );
}

function About() {
  return <h2>ℹ️ About Page</h2>,<p>i am sahana,i am pursing BCA</p>;
}

function Contact() {
  return <h2>📞 Contact Page</h2>,<p>
    Email us at:<a herf="mailto:example@example.com">example@example.com</a><br/>
    contact no:9880568327</p>;
}

function Routerex() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default Routerex;