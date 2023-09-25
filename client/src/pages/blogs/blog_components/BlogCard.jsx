import React, { useState, useEffect } from 'react';
import '../../../styles/BlogCard.css';
import { AiOutlineTags, AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt, AiOutlineUser } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import blogs from './blogs.json';

export const Card = () => {
  const [blogData] = useState(blogs);
  const [postsToShow, setPostsToShow] = useState(6);
  const [sortedPosts, setSortedPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const sorted = [...blogData].sort((a, b) => new Date(b.date) - new Date(a.date));
    setSortedPosts(sorted);
  }, [blogData]);

  const loadMore = () => {
    const additionalPosts = 6;
    const newRangeEnd = postsToShow + additionalPosts;
    const sorted = [...sortedPosts].slice(0, newRangeEnd);
    setPostsToShow(newRangeEnd);
    setSortedPosts(sorted);
  };

  // Function to generate the share link
  const getShareLink = (id) => {
    // Construct the share link using the current base URL and the specific blog post's ID
    return `${window.location.origin}/blogs/details/${id}`;
  };

  // Function to copy the shareable link to the clipboard
  const copyShareLink = (id) => {
    const shareLink = getShareLink(id);
    const textField = document.createElement('textarea');
    textField.innerText = shareLink;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
  };

  return (
    <section className="blog">
      <div className="container grid2">
        {sortedPosts.slice(0, postsToShow).map((item) => (
          <div className="box boxItems" key={item.id}>
            <div className="img">
              {item.image && <img src={item.image} alt="" />}
            </div>
            <div className="details">
              <div className="author">
                <AiOutlineUser className="auth_icon" />{item.author}
              </div>
              <button onClick={() => navigate(`/blogs/details/${item.id}`)} className="card_title_link">
                <h3>{item.title}</h3>
              </button>
              <p>{item.content.slice(0, 65)}...</p>
              <div className="date">
                <AiOutlineClockCircle className="icon" /> <label htmlFor="">{item.date}</label>
                <AiOutlineShareAlt
                  className="icon"
                  onClick={() => {
                    // Call the copyShareLink function to copy the shareable link to clipboard
                    copyShareLink(item.id);
                  }}
                />
                <label htmlFor="">SHARE</label>
              </div>
            </div>
          </div>
        ))}
      </div>
      {postsToShow < sortedPosts.length && (
        <div className="load-more-container">
          <button onClick={loadMore} className="load-more-button">
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default Card;
