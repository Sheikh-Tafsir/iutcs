import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import blogs from './blog_components/blogs.json';
import '../../styles/Blogdetails.css';
import { AiOutlineUser, AiOutlineClockCircle } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import axios from 'axios'

const BlogDetails = () => {
  // const { id } = useParams();
  const [blogPost, setBlogPost] = useState(null);
  // console.log("running")
  useEffect(() => {
    // console.log("running")
    const fetchData = async () => {
      try {
        const apiPath = 'http://localhost:3001/api/v1/blog/all';

        const response = await axios.get(apiPath);

        // Handle the successful response here
        console.log(response.data);

        // Assuming the response.data is an array of blogs
        setBlogPost(response.data);
      } catch (error) {
        // Handle any errors that occurred during the request
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!blogPost) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <Navbar />
      <div className="blog-details">
        <h1>{blogPost.title}</h1>
        <div className="author-date">
          <AiOutlineUser className="author-icon" />
          <span>{blogPost.author}</span>
          <AiOutlineClockCircle className="date-icon" />
          <span>{blogPost.date}</span>
        </div>

        <img src={blogPost.image} alt="" />
        {blogPost.video && (
          <div className="video">
            <iframe title="Video" width="560" height="315" src={blogPost.video} allowFullScreen />
          </div>
        )}
        <p className="blog_contentss">{blogPost.content}</p>
      </div>
      <Footer/>
    </>
  );
};

export default BlogDetails;
