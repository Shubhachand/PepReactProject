// BlogDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './styles/BlogDetails.css';

const BlogDetail = ({ blogPosts }) => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === parseInt(id));

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
              <img src="/images/author-avatar.jpg" alt={post.author} className="author-avatar" />
              <div className="author-details">
                <span className="author-name">{post.author}</span>
                <span className="post-date">{post.date}</span>
              </div>
            </div>
            <div className="blog-tags">
              {post.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </header>

        <div className="blog-detail-image">
          <img src={post.image} alt={post.title} />
        </div>

        <div className="blog-detail-content">
          <p className="blog-intro">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua.
          </p>

          <h2>Introduction</h2>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>

          <h2>Main Points</h2>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
            deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste 
            natus error sit voluptatem.
          </p>

          <h2>Conclusion</h2>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
        </div>

        <div className="blog-detail-footer">
          <div className="share-buttons">
            <button>Share on Twitter</button>
            <button>Share on LinkedIn</button>
          </div>
          
          <div className="author-bio">
            <img src="/images/author-avatar.jpg" alt={post.author} />
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