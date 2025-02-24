import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ToDoList from './components/ToDoList';
import ContactUs from './components/ContactUs';
// import QuizMaker from './components/QuizApp';
import Notepad from './components/Notepad';
import './App.css';
import SignUp from './components/SignUp';
// import Resources from './components/Resources';
import Login from './components/Login';
import Blogs from './components/Blogs';
import BlogDetail from './components/BlogDetails';
import QuizApp from './components/QuizApp';
// Blog posts data
const blogPosts = [
  {
      id: 1,
      title: "Study Smart: Effective Time Management Techniques",
      author: "Emily Davis",
      date: "September 15, 2023",
      tags: ["Study Tips", "Time Management"],
      image: "./components/images/img1.jpg",
  },
  {
      id: 2,
      title: "Digital Note-Taking: Best Apps and Methods",
      author: "Mark Thompson",
      date: "September 18, 2023",
      tags: ["Digital Tools", "Note Taking"],
      image: "/my-app/src/components/images/andrik-langfield-1-YQiOijio8-unsplash.jpg"
  },
  {
      id: 3,
      title: "Exam Preparation: Strategies That Actually Work",
      author: "Jessica Roberts",
      date: "September 20, 2023",
      tags: ["Exam Tips", "Study Methods"],
      image: "/images/exam-prep.jpg"
  },
  {
      id: 4,
      title: "Student Budget Guide: Managing Finances in College",
      author: "Mike Johnson",
      date: "September 22, 2023",
      tags: ["Finance", "Student Life"],
      image: "/images/student-budget.jpg"
  },
  {
      id: 5,
      title: "Remote Learning: Maximizing Online Education",
      author: "Sarah Adams",
      date: "September 25, 2023",
      tags: ["Online Learning", "Study Tips"],
      image: "/images/remote-learning.jpg"
  },
  {
      id: 6,
      title: "Building Your Student Portfolio: A Complete Guide",
      author: "John Smith",
      date: "September 28, 2023",
      tags: ["Career", "Portfolio"],
      image: "/images/portfolio-guide.jpg"
  },
  {
      id: 7,
      title: "Student Mental Health: Balance and Well-being",
      author: "Laura Wilson",
      date: "October 1, 2023",
      tags: ["Mental Health", "Wellness"],
      image: "/images/mental-health.jpg"
  },
  {
      id: 8,
      title: "Internship Success: From Application to Acceptance",
      author: "David Chen",
      date: "October 3, 2023",
      tags: ["Career", "Internships"],
      image: "/images/internship.jpg"
  },
  {
      id: 9,
      title: "Group Projects: Collaboration and Leadership Skills",
      author: "Emma Green",
      date: "October 5, 2023",
      tags: ["Teamwork", "Leadership"],
      image: "/images/group-work.jpg"
  },
  {
      id: 10,
      title: "Research Paper Writing: Step-by-Step Guide",
      author: "Alex Turner",
      date: "October 8, 2023",
      tags: ["Academic Writing", "Research"],
      image: "/images/research-paper.jpg"
  },
  {
      id: 11,
      title: "Student Networking: Building Professional Connections",
      author: "Sophie Martin",
      date: "October 10, 2023",
      tags: ["Networking", "Career Development"],
      image: "/images/networking.jpg"
  },
  {
      id: 12,
      title: "Tech Tools Every Student Should Know",
      author: "Ryan Parker",
      date: "October 12, 2023",
      tags: ["Technology", "Student Resources"],
      image: "/images/tech-tools.jpg"
  }
];


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Features />
              <Testimonials />
            </>
          } />
          <Route path="/features" element={<Features />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/todo-list" element={<ToDoList />} />
          <Route path="/quizes" element={<QuizApp />} />
          <Route path="/notepad" element={<Notepad />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blogs" element={<Blogs blogPosts={blogPosts} />} />
          <Route path="/blog/:id" element={<BlogDetail blogPosts={blogPosts} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;