import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import blogs from './blog_components/blogs.json';
import '../../styles/Blogdetails.css';
import { AiOutlineUser, AiOutlineClockCircle } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

const BlogDetails = () => {
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const post = blogs.find((blog) => blog.id === parseInt(id, 10));

        if (post) {
          setBlogPost(post);
        } else {
          console.error('Blog post not found.');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

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