import React, { useState, useEffect } from 'react';
import '../../../styles/BlogCard.css';
import { AiOutlineTags, AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt, AiOutlineUser } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import blogs from './blogs.json';
import axios from 'axios'
import Loading from '../../../components/loading/Loading'

export const Card = () => {
  const [loading, setLoading] = useState(true);
  const [blogData, setBlogData] = useState(null);
  const [postsToShow, setPostsToShow] = useState(6);
  const [sortedPosts, setSortedPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        //const apiPath = 'http://localhost:3001/blog/all';
        const apiPath = `${import.meta.env.VITE_BASE_URL}/blog/all`;

        const response = await axios.get(apiPath);

        // Handle the successful response here
        console.log(response.data);

        // Assuming the response.data is an array of blogs
        setBlogData(response.data);
        setLoading(false);
        
        const sorted = [...response.data].sort((a, b) => new Date(b.date) - new Date(a.date));
        setSortedPosts(sorted);
      } catch (error) {
        // Handle any errors that occurred during the request
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const loadMore = () => {
    const additionalPosts = 6;
    const newRangeEnd = postsToShow + additionalPosts;
    //const sorted = [...sortedPosts].slice(0, newRangeEnd);
    setPostsToShow(newRangeEnd);
    //setSortedPosts(sorted);
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

  if (loading) {
    return(
      <Loading />
    );
  }

  return (
    <section className="blog">
      <div className="container grid2">
        {sortedPosts.slice(0, postsToShow).map((item) => (
          <div className="box boxItems" 
          key={item.id} data-aos="fade-up" 
          data-aos-delay="100" data-aos-anchor-placement="center-bottom" 
          onClick={() => navigate('/blogs/details', { state: { item } })}>
            <div className="img">
              {item.imagelink && <img src={item.imagelink} alt="" />}
              {/* <img src={item.imagelink} alt="" /> */}
            </div>
            <div className="details">
              <div className="author">
                <AiOutlineUser className="auth_icon" />{item.author}
              </div>
              <button className="card_title_link">
                <h3 className='text-black'>{item.title}</h3>
              </button>
              <p>{item.content.slice(0, 65)}...</p>
              {/* <div className="date">
                <AiOutlineClockCircle className="icon" /> <label htmlFor="">{item.date}</label>
                <AiOutlineShareAlt
                  className="icon"
                  onClick={() => {
                    // Call the copyShareLink function to copy the shareable link to clipboard
                    copyShareLink(item.id);
                  }}
                />
                <label htmlFor="">SHARE</label>
              </div> */}
              <div className="mb-4 text-blue-600 date">
                <h2>Read Blog</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
      {postsToShow < sortedPosts.length && (
        <div className="load-more-container">
          <button onClick={()=>loadMore()} className="load-more-button">
            Load More
          </button>
        </div>
      )}
      {/* <div className="load-more-container">
          <button onClick={()=>loadMore()} className="load-more-button">
            Load More {postsToShow} {sortedPosts.length}
          </button>
        </div> */}
    </section>
  );
};

export default Card;