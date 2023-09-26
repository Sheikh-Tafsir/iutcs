import { useState, useEffect } from 'react';
import blogs from './blog_components/blogs.json';
import '../../styles/Blogdetails.css';
import { AiOutlineUser, AiOutlineClockCircle } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import { useLocation } from 'react-router-dom';

const BlogDetails = () => {
  const location = useLocation();
  const { item } = location.state;

  useEffect(() => {
    console.log(item);
  }, []);

  // if (!blogPost) {
  //   return <div>Loading...</div>;
  // }

  return (
    <>
      <Navbar />
      <div className="blog-details">
        <h1>{item.title}</h1>
        <div className="author-date">
          <AiOutlineUser className="author-icon" />
          <span>{item.author}</span>
          <AiOutlineClockCircle className="date-icon" />
          <span>{item.date}</span>
        </div>
        <div className='lg:flex lg:w-full pb-8'>
          <div className='lg:w-2/5'>
            <img src={item.imagelink} alt=""/>
          </div>
          
          <p className="lg:w-3/5 p-4 lg:p-8 blog_contentss">{item.content}</p>
        </div>
        {item.videolink && (
          <div className="video">
            <iframe title="Video" width="560" height="315" src={item.video} allowFullScreen />
          </div>
        )}
      </div>
      <Footer/>
    </>
  );
};

export default BlogDetails;