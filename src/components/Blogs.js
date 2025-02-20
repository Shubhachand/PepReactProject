// Blogs.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Blogs.css';

const Blogs = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 6;

   // data/blogPosts.js
 const blogPosts = [
    {
        id: 1,
        title: "Study Smart: Effective Time Management Techniques",
        author: "Emily Davis",
        date: "September 15, 2023",
        tags: ["Study Tips", "Time Management"],
        // Use placeholder images until you have your own
        image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 2,
        title: "Digital Note-Taking: Best Apps and Methods",
        author: "Mark Thompson",
        date: "September 18, 2023",
        tags: ["Digital Tools", "Note Taking"],
        image: "https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm90ZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 3,
        title: "Exam Preparation: Strategies That Actually Work",
        author: "Jessica Roberts",
        date: "September 20, 2023",
        tags: ["Exam Tips", "Study Methods"],
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXhhbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 4,
        title: "Student Budget Guide: Managing Finances in College",
        author: "Mike Johnson",
        date: "September 22, 2023",
        tags: ["Finance", "Student Life"],
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 5,
        title: "Remote Learning: Maximizing Online Education",
        author: "Sarah Adams",
        date: "September 25, 2023",
        tags: ["Online Learning", "Study Tips"],
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b25saW5lJTIwbGVhcm5pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 6,
        title: "Building Your Student Portfolio: A Complete Guide",
        author: "John Smith",
        date: "September 28, 2023",
        tags: ["Career", "Portfolio"],
        image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydGZvbGlvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 7,
        title: "Student Mental Health: Balance and Well-being",
        author: "Laura Wilson",
        date: "October 1, 2023",
        tags: ["Mental Health", "Wellness"],
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVudGFsJTIwaGVhbHRofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 8,
        title: "Internship Success: From Application to Acceptance",
        author: "David Chen",
        date: "October 3, 2023",
        tags: ["Career", "Internships"],
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJuc2hpcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 9,
        title: "Group Projects: Collaboration and Leadership Skills",
        author: "Emma Green",
        date: "October 5, 2023",
        tags: ["Teamwork", "Leadership"],
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVhbXdvcmt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 10,
        title: "Research Paper Writing: Step-by-Step Guide",
        author: "Alex Turner",
        date: "October 8, 2023",
        tags: ["Academic Writing", "Research"],
        image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzZWFyY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 11,
        title: "Student Networking: Building Professional Connections",
        author: "Sophie Martin",
        date: "October 10, 2023",
        tags: ["Networking", "Career Development"],
        image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV0d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 12,
        title: "Tech Tools Every Student Should Know",
        author: "Ryan Parker",
        date: "October 12, 2023",
        tags: ["Technology", "Student Resources"],
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaCUyMHRvb2xzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    }
];
    const categories = [
        "Study Tips",
        "Time Management",
        "Digital Tools",
        "Academic Writing",
        "Student Life",
        "Career Development",
        "Research Skills",
        "Mental Health",
        "Technology",
        "Learning Methods"
    ];

    // Calculate total pages
    const totalPages = Math.ceil(blogPosts.length / cardsPerPage);

    // Get current posts
    const indexOfLastPost = currentPage * cardsPerPage;
    const indexOfFirstPost = indexOfLastPost - cardsPerPage;
    const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const handlePrevPage = () => {
        setCurrentPage(prev => Math.max(prev - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage(prev => Math.min(prev + 1, totalPages));
    };

    return (
        <div className="blogs-container">
            <header className="blogs-header">
                <h1>Student Success Hub</h1>
                <h2>Your Guide to Academic Excellence</h2>
                <p>Discover tips, tools, and strategies to enhance your learning journey and achieve your academic goals.</p>
            </header>

            <div className="categories-section">
                <div className="categories-list">
                    {categories.map((category, index) => (
                        <span key={index} className="category-tag">{category}</span>
                    ))}
                </div>
            </div>

            <div className="newsletter-signup">
                <input 
                    type="email" 
                    placeholder="Enter your email for weekly study tips" 
                    className="newsletter-input"
                />
                <button className="newsletter-button">Subscribe</button>
            </div>

            <div className="blog-grid">
                {currentPosts.map((post) => (
                    <Link to={`/blog/${post.id}`} key={post.id} className="blog-card-link">
                        <div className="blog-card">
                            <div className="blog-image">
                                <img src={post.image} alt={post.title} />
                            </div>
                            <div className="blog-content">
                                <h3>{post.title}</h3>
                                <div className="blog-meta">
                                    <span className="author">{post.author}</span>
                                    <span className="date">{post.date}</span>
                                </div>
                                <div className="blog-tags">
                                    {post.tags.map((tag, index) => (
                                        <span key={index} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="pagination">
                <button 
                    className="prev-btn" 
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                >
                    ←
                </button>
                <span className="page-info">Page {currentPage} of {totalPages}</span>
                <button 
                    className="next-btn" 
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                >
                    →
                </button>
            </div>
        </div>
    );
};

export default Blogs;