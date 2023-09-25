import React, { useState, useEffect } from 'react';
import  Card  from "./blog_components/BlogCard";
import "../../styles/Blogdetails.css"; // Create a CSS file for your Home component
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import axios from 'axios'


export const BlogsHome = () => {
  const [blogPost, setBlogPost] = useState(null);

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

  return (
    <>
      {/* <Navigation Section> */}
      <Navbar/>
      <section className="cover-section">
        <div className="cover-image">
          <img
            src="https://st4.depositphotos.com/21389766/23111/i/450/depositphotos_231117658-stock-photo-application-choice-form-document-survey.jpg" // Replace with your cover image URL
            alt="Cover"
          />
        </div>
        <div className="cover-text">
          <h1>BLOGS</h1>
        </div>
      </section>
      <section className="blog-section">
        <Card />
      </section>
      <Footer/>
    </>
  );
};
export default BlogsHome;