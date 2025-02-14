import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ToDoList from './components/ToDoList';
import QuizMaker from './components/QuizMaker';
import Notepad from './components/Notepad';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/features" element={<Features />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/todo-list" element={<ToDoList />} />
          <Route path="/quiz-maker" element={<QuizMaker />} />
          <Route path="/notepad" element={<Notepad />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;