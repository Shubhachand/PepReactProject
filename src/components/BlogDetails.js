// BlogDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './styles/BlogDetails.css';

const BlogDetail = ({ blogPosts }) => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === parseInt(id, 10));

  if (!post) {
    return <div className="blog-detail-error">Blog post not found</div>;
  }

  return (
    <div className="blog-detail-container">
      <Link to="/blogs" className="back-button">← Back to Blogs</Link>
      
      <article className="blog-detail">
        <header className="blog-detail-header">
          <h1>{post.title}</h1>
          <div className="blog-detail-meta">
            <div className="author-info">
              <img src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8OTk2MjA0NDR8fGVufDB8fHx8fA%3D%3D" alt={post.author} className="author-avatar" loading="lazy" />
              <div className="author-details">
                <span className="author-name">{post.author}</span>
                <span className="post-date">{post.date}</span>
              </div>
            </div>
            <div className="blog-tags">
              {post.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </header>

        {post.image && (
          <div className="blog-detail-image">
            {/* <img src={post.image} alt={post.title} />
             */}
             <img src = "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGltZSUyMG1hbmFnZW1lbnR8ZW58MHx8MHx8fDA%3D" alt = "Time Management" />
          </div>
        )}

        <div className="blog-detail-content">
          <p className="blog-intro">
            Effective time management is crucial for students to balance their academic responsibilities with personal activities. Here are some techniques to help you study smart.
          </p>

          <h2>Introduction</h2>
          <p>
            Time management is the process of planning and controlling how much time to spend on specific activities. Good time management enables an individual to complete more in a shorter period of time, lowers stress, and leads to career success.
          </p>

          <h2>Main Points</h2>
          <p>
            1. **Prioritize Tasks**: Identify the most important tasks and tackle them first. Use tools like the Eisenhower Matrix to distinguish between urgent and important tasks.
          </p>
          <p>
            2. **Create a Study Schedule**: Allocate specific time slots for studying and stick to them. Consistency is key to effective learning.
          </p>
          <p>
            3. **Set SMART Goals**: Ensure your goals are Specific, Measurable, Achievable, Relevant, and Time-bound. This helps in maintaining focus and motivation.
          </p>
          <p>
            4. **Avoid Multitasking**: Focus on one task at a time to improve the quality of your work and reduce the time spent switching between tasks.
          </p>
          <p>
            5. **Take Regular Breaks**: Use techniques like the Pomodoro Technique to take short, regular breaks. This helps in maintaining high levels of concentration.
          </p>

          <h2>Conclusion</h2>
          <p>
            By implementing these time management techniques, students can enhance their productivity and achieve a better balance between their academic and personal lives. Remember, the key to success is not just hard work, but also smart work.
          </p>
        </div>

        <div className="blog-detail-footer">
          <div className="share-buttons">
            <button onClick={() => window.open(`https://twitter.com/share?url=${window.location.href}`, '_blank')}>Share on Twitter</button>
            <button onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`, '_blank')}>Share on LinkedIn</button>
          </div>
          
          <div className="author-bio">
            <img src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8OTk2MjA0NDR8fGVufDB8fHx8fA%3D%3D" alt={post.author} />
            <div className="author-bio-content">
              <h3>{post.author}</h3>
              <p>Professional writer and content creator specializing in educational content 
                and student resources.</p>
            </div>
          </div>
        </div>
      </article>

      <div className="related-posts">
        <h2>Related Posts</h2>
        <div className="related-posts-grid">
          {blogPosts
            .filter(relatedPost => 
              relatedPost.id !== post.id && 
              relatedPost.tags.some(tag => post.tags.includes(tag))
            )
            .slice(0, 3)
            .map(relatedPost => (
              <Link to={`/blog/${relatedPost.id}`} key={relatedPost.id} className="related-post-card">
                <img src={relatedPost.image} alt={relatedPost.title} />
                <h3>{relatedPost.title}</h3>
                <span className="related-post-date">{relatedPost.date}</span>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;